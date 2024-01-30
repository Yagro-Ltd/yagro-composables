import { useBaseFormatter } from './useBaseFormatter'

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
