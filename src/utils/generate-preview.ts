/***
 * Generates a preview of the content by cutting off at approximately 200 characters.
 * @param content - The full content to generate a preview from.
 * @returns The generated preview string.
 */

export function generatePreview(content: string): string {
  const maxLength = 200

  if (content.length <= maxLength) {
    return content
  }

  return content.substring(0, maxLength).trim() + '...'
}
