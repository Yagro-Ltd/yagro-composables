/**
 * useExtractFileExtension
 * Extracts the extension from a string, excluding the filename
 * @param text - The filename with extension
 * @returns The extension
 * @example useExtractFileExtension('file.txt') // 'txt'
 */

export function useExtractFileExtension(text: string) {
  if (!text)
    return ''

  /* Find the last dot in the string */
  const lastDotIndex = text.lastIndexOf('.')
  /* If there is no dot, return the full name */
  if (lastDotIndex === -1)
    return text
  /* Otherwise, return the extension */
  return text.substring(lastDotIndex + 1)
}
