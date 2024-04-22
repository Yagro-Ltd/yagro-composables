/**
 * useFormatNumber
 * @description Formats a number
 * @param {number | bigint} value - The number to format
 * @returns {string | undefined} The formatted number
 * @example useFormatNumber(1000) // '1,000'
 */

import { useBaseFormatter } from './useBaseFormatter'

export function useFormatNumber(value: number | bigint) {
  if (!value)
    return

  const formatter = useBaseFormatter({
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return formatter?.format(value)
}

// 'In-source Test' for the useFormatNumber function

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useFormatNumber', () => {
    expect(useFormatNumber(100)).toBe('100.00')
    expect(useFormatNumber(100.95)).toBe('100.95')
    expect(useFormatNumber(100.955)).toBe('100.96')
    expect(useFormatNumber(1000)).toBe('1,000.00')
  })
}
