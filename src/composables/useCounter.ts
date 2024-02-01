/**
 * useCounter
 * - An example of a composable function, importing Vue's ref function
 * @description Returns a counter with increment and decrement functions
 * @example const { count, increment, decrement } = useCounter()
 */

import { ref } from 'vue'

export function useCounter() {
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  return {
    count,
    increment,
    decrement,
  }
}

// 'In-source Test' for useCounter

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('useCounter', () => {
    const { count, increment, decrement } = useCounter()
    expect(count.value).toBe(0)
    increment()
    expect(count.value).toBe(1)
    decrement()
    expect(count.value).toBe(0)
  })
}
