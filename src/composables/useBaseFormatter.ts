/**
 * useBaseFormatter
 * @description Returns a formatter for a given locale and options
 * @param {Intl.NumberFormatOptions} options
 * @returns {Intl.NumberFormat}
 * @example useBaseFormatter({ style: 'currency', currency: 'EUR' })
 */

export function useBaseFormatter(options: Intl.NumberFormatOptions | undefined) {
  if (!options)
    return
  const formatter = new Intl.NumberFormat('en-GB', options)
  return formatter
}

// 'In-source Test' for the useBaseFormatter function
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useBaseFormatter', () => {
    expect(useBaseFormatter({ style: 'currency', currency: 'EUR' })).toBeInstanceOf(Intl.NumberFormat)
  })
}
