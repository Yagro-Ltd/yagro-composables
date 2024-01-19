<script setup>
import { useFormatFileSize } from '@/composables/useNumberFormatter';
import { defineEmits, defineProps, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const emit = defineEmits(['removeFile'])

const props = defineProps({
  file: {
    type: File,
    required: true,
  },
  exceedsFileSizeLimit: {
    type: Boolean,
    required: false,
  },
})

const formattedFileSize = computed(() => useFormatFileSize(props.file.size));

</script>

<template>
  <div
    class="y-file-card"
  >
    <div class="y-file-card__info">
      <span class="y-file-card__title">{{ file.name }}</span>
      <span
        class="y-file-card__label"
        :class="{'y-file-card__label--warning': props.exceedsFileSizeLimit}"
      >{{ formattedFileSize }}</span>
    </div>
    <button
      class="y-file-card__button-remove"
      @click="emit('removeFile', file)"
    >
      <span class="sr-only">Remove file</span>
      <span class="text-4">
        <font-awesome-icon :icon="['far', 'xmark']" />
      </span>
    </button>
  </div>
</template>

<style>
.y-file-card {
  -webkit-font-smoothing: antialiased;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
  background-color: #fff;
  gap: 1rem;
  color: black;
  width: 100%;
  border: 1px solid var(--color-border);
}

.y-file-card__info {
  margin: 0;
  line-height: 1;
  color: black;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  padding-left: 1rem;
}

.y-file-card__title {
  font-size: 0.75rem;
  font-weight: 700;
  width: 50%;
  flex: 1;
}

.y-file-card__label {
  background: var(--color-primary);
  font-size: 0.75rem;
  color: white;
  display: block;
  padding: 0.25em 0.5em;
  border-radius: 0.25rem;
  line-height: 1;
  min-width: 3rem;
  text-align: center;
  max-width: 6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.y-file-card__label--warning {
  background: var(--color-status-warning);
  color: var(--color-black);
}

.y-file-card__button-remove {
  appearance: none;
  border: none;
  background: none;
  padding: 1rem;
  margin: 0;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
  border-left: 1px solid var(--color-border);
  @media (hover: hover) {
    &:hover {
      color: var(--color-secondary);
    }
  }

  svg {
    width: 1rem;
  }
}
</style>
