"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

const STORAGE_KEY = "thegamevoice_saved_articles";
const empty: string[] = [];
let snapshot = empty;
let serialized: string | null | undefined;
let persistent = true;
const listeners = new Set<() => void>();
function read() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value !== serialized) {
      serialized = value;
      const parsed: unknown = value ? JSON.parse(value) : [];
      snapshot = Array.isArray(parsed) ? [...new Set(parsed.filter((id): id is string => typeof id === "string"))] : empty;
    }
  } catch { persistent = false; }
  return snapshot;
}
function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => { listeners.delete(callback); window.removeEventListener("storage", callback); };
}
function write(next: string[]) {
  snapshot = next;
  try { serialized = JSON.stringify(next); localStorage.setItem(STORAGE_KEY, serialized); persistent = true; }
  catch { persistent = false; }
  listeners.forEach((callback) => callback());
}
const subscribeMount = () => () => {};
interface BookmarkState {
  bookmarks: string[];
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  clearBookmarks: () => void;
  mounted: boolean;
  persistent: boolean;
}
const BookmarkContext = createContext<BookmarkState>({
  bookmarks: empty,
  isBookmarked: () => false,
  toggleBookmark: () => {},
  removeBookmark: () => {},
  clearBookmarks: () => {},
  mounted: false,
  persistent: true,
});
export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const bookmarks = useSyncExternalStore(subscribe, read, () => empty);
  const mounted = useSyncExternalStore(subscribeMount, () => true, () => false);
  return <BookmarkContext.Provider value={{ bookmarks, mounted, persistent,
    isBookmarked: (id) => bookmarks.includes(id),
    toggleBookmark: (id) => { const current = read(); write(current.includes(id) ? current.filter((item) => item !== id) : [...current, id]); },
    removeBookmark: (id) => write(read().filter((item) => item !== id)),
    clearBookmarks: () => write([]),
  }}>{children}</BookmarkContext.Provider>;
}
export function useBookmarks() { return useContext(BookmarkContext); }
