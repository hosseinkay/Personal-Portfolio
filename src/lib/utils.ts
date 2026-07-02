import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Static <a>/<img> tags don't get basePath rewritten automatically the way
// next/link and next/image do, so route any hand-written root-relative path
// through this before rendering it as an href/src.
export function withBasePath(path: string) {
  if (/^https?:\/\//.test(path)) return path;
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
