"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface BookmarkContextType {
  bookmarks: string[];
  isBookmarked: (id: string) => boolean;
  toggleBookmark: (id: string) => void;
  removeBookmark: (id: string) => void;
  clearBookmarks: () => void;
  mounted: boolean;
}

const BookmarkContext = createContext<BookmarkContextType>({
  bookmarks: [],
  isBookmarked: () => false,
  toggleBookmark: () => {},
  removeBookmark: () => {},
  clearBookmarks: () => {},
  mounted: false,
});

const STORAGE_KEY = "thegamevoice_saved_articles";

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setBookmarks(parsed);
        }
      }
    } catch {
      // Ignore localStorage errors
    } finally {
      setMounted(true);
    }
  }, []);

  const saveBookmarks = (newBookmarks: string[]) => {
    setBookmarks(newBookmarks);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newBookmarks));
    } catch {
      // Ignore
    }
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const toggleBookmark = (id: string) => {
    if (bookmarks.includes(id)) {
      saveBookmarks(bookmarks.filter((b) => b !== id));
    } else {
      saveBookmarks([...bookmarks, id]);
    }
  };

  const removeBookmark = (id: string) => {
    saveBookmarks(bookmarks.filter((b) => b !== id));
  };

  const clearBookmarks = () => {
    saveBookmarks([]);
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        isBookmarked,
        toggleBookmark,
        removeBookmark,
        clearBookmarks,
        mounted,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  return useContext(BookmarkContext);
}

