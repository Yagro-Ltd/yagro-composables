export function useExtractFileName(fullName: string) {
  if (!fullName)
    return ''

  /* Find the last dot in the string */
  const lastDotIndex = fullName.lastIndexOf('.')
  /* If there is no dot, return the full name */
  if (lastDotIndex === -1)
    return fullName
  /* Otherwise, return the filename, excluding the extension */
  return fullName.substring(0, lastDotIndex)
}

/**
 * 'In-source Test' for the useExtractFileName function
 */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useExtractFileName', () => {
    expect(useExtractFileName('example')).toBe('example')
    expect(useExtractFileName('example.jpg')).toBe('example')
    expect(useExtractFileName('example.jpg.jpg')).toBe('example.jpg')
  })
}
