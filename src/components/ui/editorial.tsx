import Image from "next/image";
import type { Story } from "@/types";
export function Artwork({story, priority=false, className=""}:{story:Story;priority?:boolean;className?:string}) { return <div className={`art ${className}`}><Image src={story.image} alt={story.alt} fill priority={priority} sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>; }
export function Label({children}:{children:React.ReactNode}) {return <span className="label">{children}</span>}
export function SectionTitle({eyebrow,title,description}:{eyebrow:string;title:string;description?:string}) {return <div className="section-heading"><div><span className="eyebrow"><i />{eyebrow}</span><h2>{title}<span className="period">.</span></h2></div>{description && <p>{description}</p>}</div>}
