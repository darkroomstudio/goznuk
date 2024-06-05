// src/utils/calculateReadTime.ts

/**
 * Calculate read time based on content length.
 * Assumes an average reading speed of 1100 characters per minute.
 * @param content - The content of the post
 * @returns The read time in minutes
 */

export function calculateReadTime(content: String): number {
  const characterPerMinute = 1100
  const characterCount = content.length
  const readTime = Math.ceil(characterCount / characterPerMinute)
  return readTime
}
