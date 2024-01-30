<script setup lang="ts">
import { useFormatFileSize } from '../composables/useFormatFileSize'
import { useExtractFilename } from '../composables/useExtractFilename'
</script>

<template>
  <div>
    <ul>
      <li>useFormatFileSize: {{ useFormatFileSize(12345) }}</li>
      <li>useFormatFileSize: {{ useFormatFileSize(123456789) }}</li>
      <li>useExtractFilename: {{ useExtractFilename('vegetables.jpg') }}</li>
      <li>useExtractFilename: {{ useExtractFilename('vegetables') }}</li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style: initial;
}
</style>
