/* Base formatter */
export function useBaseFormatter(options: Intl.NumberFormatOptions | undefined) {
  if (!options)
    return
  const formatter = new Intl.NumberFormat('en-GB', options)
  return formatter
}
