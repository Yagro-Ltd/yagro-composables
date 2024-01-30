<script setup lang="ts">
import { useFormatFileSize } from '../composables/useFormatFileSize'
import { useExtractFileName } from '../composables/useExtractFilename'
import { useExtractFileExtension } from '../composables/useExtractFileExtension'
</script>

<template>
  <div>
    <ul>
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
