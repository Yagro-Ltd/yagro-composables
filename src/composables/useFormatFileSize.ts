import { useBaseFormatter } from './useBaseFormatter'

/* File Size Formatter */
export function useFormatFileSize(bytes: number) {
  const units = ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte']
  const unitIndex = Math.max(0, Math.min(Math.floor(Math.log(bytes) / Math.log(1000)), units.length - 1))

  return Intl.NumberFormat('en-GB', {
    style: 'unit',
    unit: units[unitIndex],
  }).format(bytes / (1000 ** unitIndex))
}

/**
 * 'In-source Test' for the useFormatFileSize function
 */
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useFormatFileSize', () => {
    expect(useFormatFileSize(100)).toBe('100 byte')
    expect(useFormatFileSize(1000)).toBe('1 kB')
    expect(useFormatFileSize(10000)).toBe('10 kB')
    expect(useFormatFileSize(100000)).toBe('100 kB')
    expect(useFormatFileSize(1000000)).toBe('1 MB')
    expect(useFormatFileSize(10000000)).toBe('10 MB')
    expect(useFormatFileSize(100000000)).toBe('100 MB')
    expect(useFormatFileSize(1000000000)).toBe('1 GB')
    expect(useFormatFileSize(10000000000)).toBe('10 GB')
    expect(useFormatFileSize(100000000000)).toBe('100 GB')
    expect(useFormatFileSize(1000000000000)).toBe('1 Bananas')
  })
}
