import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolvePath(href: string | undefined | null, currentPath?: string | undefined) {
  if (!href) {
    return "";
  }

  if (href.startsWith("http")) {
    return href;
  }

  const baseUrl = import.meta.env.BASE_URL;

  if (!baseUrl) {
    return href;
  }

  const base = baseUrl.replace(/\/$/, "");

  const resolvedPath = href.startsWith("/")
    ? base + href
    : (currentPath ?? "").replace(/\/$/, "") + "/" + href;

  return resolvedPath;
}
