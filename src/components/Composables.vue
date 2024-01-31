<script setup lang="ts">
import { useExtractFileExtension, useExtractFileName, useFormatFileSize } from '@yagro/composables'
import { computed } from 'vue'

const computedFileSize = computed(() => useFormatFileSize(12345))
</script>

<template>
  <div>
    <ul>
      <li>computedFileSize: {{ computedFileSize }}</li>
      <li>useFormatFileSize: {{ useFormatFileSize(12345) }}</li>
      <li>useFormatFileSize: {{ useFormatFileSize(123456789) }}</li>
      <li>useExtractFilename: {{ useExtractFileName('vegetables.jpg') }}</li>
      <li>useExtractFileExtension: {{ useExtractFileExtension('vegetables.test.jpg') }}</li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style: initial;
}
</style>
