import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Standard Tailwind class merger. 
 * Combines clsx for conditional classes and twMerge to handle conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats large numbers into human-readable strings (e.g., 1.5k, 2.3m).
 * Optimized for repository star counts.
 */
export function formatStars(count: number): string {
  if (count >= 1_000_000) {
    const formatted = (count / 1_000_000).toFixed(1);
    return `${formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted}m`;
  }
  if (count >= 1_000) {
    const formatted = (count / 1_000).toFixed(1);
    return `${formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted}k`;
  }
  return count.toString();
}

/**
 * A standard debounce utility to limit the rate at which a function fires.
 * Useful for search inputs to prevent excessive re-renders/filtering.
 */
export function debounce<T extends (...args: any[]) => void>(fn: T, wait = 200) {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

/**
 * Safely highlights matching text within a string by wrapping matches in <mark> tags.
 * Handles regex special characters and multi-word queries.
 */
export function highlightMatch(text: string, query: string): string {
  if (!query || !query.trim()) return text;

  // Split query into individual words and escape them for regex safety
  const words = query
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 1)
    .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  if (words.length === 0) return text;

  // Create a global, case-insensitive regex for all words
  const regex = new RegExp(`(${words.join("|")})`, "ig");

  // Use the <mark> tag which is styled in globals.css
  return text.replace(regex, "<mark>$1</mark>");
}

/**
 * Truncates text to a specified length and adds an ellipsis.
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}