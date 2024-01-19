/* Base formatter */
export function useBaseFormatter(options: Intl.NumberFormatOptions | undefined) {
  if (!options)
    return
  const formatter = new Intl.NumberFormat('en-GB', options)
  return formatter
}

/* File Size Formatter */
export function useFormatFileSize(value: number | bigint) {
  if (!value)
    return

  const formatter = useBaseFormatter({
    notation: 'compact',
    style: 'unit',
    unit: 'byte',
    unitDisplay: 'narrow',
  })

  return (formatter as Intl.NumberFormat).format(value)
}

/* Currency Formatter */
export function useFormatCurrency(value: number | bigint) {
  if (!value)
    return

  const formatter = useBaseFormatter({
    style: 'currency',
    currency: 'GBP',
  })

  return formatter?.format(value)
}
