import { useBaseFormatter } from './useBaseFormatter'

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
