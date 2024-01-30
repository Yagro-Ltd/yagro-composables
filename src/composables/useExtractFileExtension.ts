export function useExtractFileExtension(fullName: string) {
  if (!fullName)
    return ''

  /* Find the last dot in the string */
  const lastDotIndex = fullName.lastIndexOf('.')
  /* If there is no dot, return the full name */
  if (lastDotIndex === -1)
    return fullName
  /* Otherwise, return the extension */
  return fullName.substring(lastDotIndex + 1)
}
