/**
 * useFormatFileSize
 * @description Formats a number as a file with units
 * @param {number} bytes - The number to format
 * @returns {string} The formatted file size
 * @example useFormatFileSize(1000000) // '1 MB'
 */

import { useBaseFormatter } from './useBaseFormatter'

export function useFormatFileSize(bytes: number) {
  const units = ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte']
  const unitIndex = Math.max(0, Math.min(Math.floor(Math.log(bytes) / Math.log(1000)), units.length - 1))

  return Intl.NumberFormat('en-GB', {
    style: 'unit',
    unit: units[unitIndex],
    maximumFractionDigits: 2,

  }).format(bytes / (1000 ** unitIndex))
}

// 'In-source Test' for the useFormatFileSize function
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useFormatFileSize', () => {
    expect(useFormatFileSize(100)).toBe('100 byte')
    expect(useFormatFileSize(1000)).toBe('1 kB')
    expect(useFormatFileSize(10000)).toBe('10 kB')
    expect(useFormatFileSize(12345)).toBe('12.35 kB') // Tests for rounding of fractions
    expect(useFormatFileSize(100000)).toBe('100 kB')
    expect(useFormatFileSize(1000000)).toBe('1 MB')
    expect(useFormatFileSize(10000000)).toBe('10 MB')
    expect(useFormatFileSize(100000000)).toBe('100 MB')
    expect(useFormatFileSize(1000000000)).toBe('1 GB')
    expect(useFormatFileSize(10000000000)).toBe('10 GB')
    expect(useFormatFileSize(100000000000)).toBe('100 GB')
    expect(useFormatFileSize(1000000000000)).toBe('1 TB')
  })
}
