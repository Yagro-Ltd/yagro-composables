<script setup lang="ts">
import { computed } from 'vue'
import { useCounter, useExtractFileExtension, useExtractFileName, useFormatDate, useFormatFileSize } from '../../dist/yagro-composables.es.js'

const { count, increment, decrement } = useCounter()
const computedFileSize = computed(() => useFormatFileSize(12345))
</script>

<template>
  <div>
    <ul>
      <li>computedFileSize: {{ computedFileSize }}</li>
      <li>useFormatFileSize: {{ useFormatFileSize(12345) }}</li>
      <li>useFormatFileSize: {{ useFormatFileSize(123456789) }}</li>
      <li>useFormatFileSize: {{ useFormatFileSize(12345678910) }}</li>
      <li>useExtractFilename: {{ useExtractFileName('vegetables.jpg') }}</li>
      <li>useExtractFileExtension: {{ useExtractFileExtension('vegetables.test.jpg') }}</li>
      <li>useFormatDate: {{ useFormatDate('2024-01-01') }}</li>
      <li>useFormatDate: {{ useFormatDate('2024-01-01', 'dd/MM/yyyy') }}</li>
    </ul>
    <button @click="increment">
      Increment
    </button>
    <input v-model="count" type="text">
    <button @click="decrement">
      Decrement
    </button>
  </div>
</template>

<style>
ul {
  list-style: initial;
}
</style>
