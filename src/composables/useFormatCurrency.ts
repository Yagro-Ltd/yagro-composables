/**
 * useFormatCurrency
 * @description Formats a number as a currency
 * @param {number | bigint} value - The number to format
 * @returns {string | undefined} The formatted currency
 * @example useFormatCurrency(1000) // '£1,000.00'
 */

import { useBaseFormatter } from './useBaseFormatter'

export function useFormatCurrency(value: number | bigint) {
  if (!value)
    return

  const formatter = useBaseFormatter({
    style: 'currency',
    currency: 'GBP',
  })

  return formatter?.format(value)
}

// 'In-source Test' for the useFormatCurrency function

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useFormatCurrency', () => {
    expect(useFormatCurrency(100)).toBe('£100.00')
    expect(useFormatCurrency(100.95)).toBe('£100.95')
    expect(useFormatCurrency(100.955)).toBe('£100.96')
    expect(useFormatCurrency(1000)).toBe('£1,000.00')
  })
}
