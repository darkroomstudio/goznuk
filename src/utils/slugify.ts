// src/utils/slugify.ts

/**
 * Converts a string into a URL-friendly slug.
 * @param str - The string to slugify
 * @returns The slugified string
 */

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-word characters
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and consecutive dashes with a single dash
    .replace(/^-+|-+$/g, '') // Remove leading and trailing dashes
}
