/**
 * useExtractFileExtension
 * Extracts the extension from a string, excluding the filename
 * @param input The text string, or an object to allow for options
 * @returns The extension
 * @example useExtractFileExtension({ text: 'file.txt' }) => 'txt'
 * @example useExtractFileExtension({ text: 'file.txt', includeDot: true }) => '.txt'
 * @example useExtractFileExtension('file.txt') => 'txt'
 */
export function useExtractFileExtension(input: string | { text: string, includeDot?: boolean }) {
  let text: string
  let includeDot = false

  if (typeof input === 'string') {
    text = input
  }
  else {
    text = input.text
    includeDot = input.includeDot || false
  }

  if (!text)
    return ''

  /* Find the last dot in the string */
  const lastDotIndex = text.lastIndexOf('.')

  /* If there is no dot, return the full name */
  if (lastDotIndex === -1)
    return text

  /* Extract the extension */
  const extension = text.slice(lastDotIndex + (includeDot ? 0 : 1))

  return extension
}

// 'In-source Test' for the useExtractFileExtension function
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useExtractFileExtension', () => {
    expect(useExtractFileExtension('file.txt')).toBe('txt')
    expect(useExtractFileExtension({ text: 'file' })).toBe('file')
    expect(useExtractFileExtension({ text: 'file.txt' })).toBe('txt')
    expect(useExtractFileExtension({ text: 'file.txt', includeDot: true })).toBe('.txt')
  })
}
