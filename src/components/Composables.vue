<script setup lang="ts">
import { useFormatFileSize } from '../composables/useNumberFormatters.js'
</script>

<template>
  <div>
    {{ useFormatFileSize(123) }}
    {{ useFormatFileSize(1234) }}
    {{ useFormatFileSize(12345) }}
    {{ useFormatFileSize(123456) }}
    {{ useFormatFileSize(1234567) }}
    {{ useFormatFileSize(12345678) }}
    {{ useFormatFileSize(123456789) }}
  </div>
</template>
