/**
 * useExtractFileName
 * Extracts the filename from a string, excluding the extension
 * @param text - The filename with extension
 * @returns The filename without the extension
 * @example useExtractFileName('file.txt')
 */

export function useExtractFileName(text: string) {
  if (!text)
    return ''

  /* Find the last dot in the string */
  const lastDotIndex = text.lastIndexOf('.')
  /* If there is no dot, return the full name */
  if (lastDotIndex === -1)
    return text
  /* Otherwise, return the filename, excluding the extension */
  return text.substring(0, lastDotIndex)
}

// 'In-source Test' for the useExtractFileName function

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useExtractFileName', () => {
    expect(useExtractFileName('example')).toBe('example')
    expect(useExtractFileName('example.jpg')).toBe('example')
    expect(useExtractFileName('example.jpg.jpg')).toBe('example.jpg')
  })
}
