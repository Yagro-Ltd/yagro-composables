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
