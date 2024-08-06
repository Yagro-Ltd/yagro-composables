import { format } from 'date-fns'

/**
 * Formats a date string into a specified format using date-fns.
 *
 * @param {string} dateString - The date string to format.
 * @param {string} [fmt] - The format string to use, default is 'dd.MM.yyyy'.
 * @returns {string} The formatted date string or an error message if the date is invalid.
 */
export function useFormatDate(dateString: string, fmt = 'dd.MM.yyyy'): string {
  const dateObject = new Date(dateString)

  if (Number.isNaN(dateObject.getTime()))
    return 'Invalid date'

  return format(dateObject, fmt)
}

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useFormatDate', () => {
    expect(useFormatDate('2024-01-01')).toBe('01.01.2024')
    expect(useFormatDate('2024-01-01', 'dd/MM/yyyy')).toBe('01/01/2024')
    expect(useFormatDate('2024-01-01', 'yyyy-MM-dd')).toBe('2024-01-01')
    expect(useFormatDate('ghfhfh', 'dd/MM/yyyy')).toBe('Invalid date')
  })
}
