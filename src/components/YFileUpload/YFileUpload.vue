<script setup>
import { useFormatFileSize } from '@/composables/useNumberFormatter';
import { ref, watch, defineProps, defineEmits, computed } from 'vue';
import FileCard from './FileCard.vue';

const props = defineProps({
  acceptedFileTypes: {
    type: Array,
    default: () => ['.xls', '.xlsx', '.csv', '.pdf', '.jpeg', '.jpg', '.png', '.parquet'],
  },
  fileSizeLimit: {
    type: Number,
    default: 1000000, // 1000000 = 1MB
  },
});

const acceptedFileTypesString = computed(() => props.acceptedFileTypes.join(', '));

const emit = defineEmits(['update:fileList']);

const dropZoneElem = ref(null);
const fileElem = ref(null);
const fileList = ref([]);
const isDragOver = ref(false);

const triggerFileSelect = () => {
  fileElem.value.click();
};

const toggleDragOver = (value = null) => {
  isDragOver.value = value ?? !isDragOver.value;
};

const processDroppedFiles = (droppedFiles) => {
  Array.from(droppedFiles).forEach(file => {
    fileList.value.push(file);
  });
  updateParentFileList();
};

const handleDrop = (event) => {
  toggleDragOver(false);
  const files = event.dataTransfer.files;
  if (files.length) {
    processDroppedFiles(files);
  }
};

const handleFiles = () => {
  fileList.value = Array.from(fileElem.value.files);
  updateParentFileList();
};

const updateParentFileList = () => {
  const dataTransfer = new DataTransfer();
  fileList.value.forEach(file => {
    dataTransfer.items.add(file);
  });
  fileElem.value.files = dataTransfer.files;
  emit('update:fileList', fileElem.value.files);
};

const removeFile = (fileIndex) => {
  if (fileIndex === undefined || fileIndex === null) return;
  fileList.value.splice(fileIndex, 1);
  updateParentFileList();
};

const doesFileExceedSizeLimit = (file) => {
  if (!file) return;
  return file.size >= props.fileSizeLimit;
};

const formattedFileSizeLimit = computed(() => useFormatFileSize(props.fileSizeLimit));

watch(fileList, (newList) => {
  emit('update:fileList', newList);
});
</script>

<template>
  <div
    ref="dropZoneElem"
    class="y-file-upload"
    :class="{'y-file-upload--is-over': isDragOver}"
    @drop.prevent="handleDrop"
    @dragover.prevent="toggleDragOver(true)"
    @dragleave.prevent="toggleDragOver(false)"
    @dragend.prevent="toggleDragOver(false)"
  >
    <header class="y-file-upload__header">
      <input
        ref="fileElem"
        type="file"
        multiple
        hidden
        :accept="acceptedFileTypesString"
        @change="handleFiles"
      >
    </header>
    <div
      v-if="fileList.length"
      class="y-file-upload__body"
    >
      <ul class="y-file-upload__list">
        <li
          v-for="(file, index) in fileList"
          :key="index"
          class="y-file-upload__list-item"
        >
          <FileCard
            :file="file"
            :exceeds-file-size-limit="doesFileExceedSizeLimit(file)"
            @removeFile="file => removeFile(index)"
          />
        </li>
      </ul>
    </div>
    <footer
      class="y-file-upload__footer"
    >
      <div class="y-file-upload__footer-drag-text">
        <span class="y-file-upload__footer-icon">
          <font-awesome-icon :icon="['far', 'cloud-upload']" />
        </span>
        <span
          class="underline"
          v-text="isDragOver ? 'Drop em' : 'Drag and drop your files here.'"
        />
      </div>

      <button
        class="y-file-upload__footer-click-text"
        type="button"
        @click="triggerFileSelect"
      >
        Or click here
      </button>

      <p
        v-if="acceptedFileTypes.length > 0"
        class="y-file-upload__footer-upload-text"
      >
        Accepted file {{ acceptedFileTypes.length > 0 ? 'type is' : 'types are' }} {{ acceptedFileTypesString }}
      </p>
      <p
        v-if="fileSizeLimit"
        class="y-file-upload__footer-upload-text"
      >
        File size limit is {{ formattedFileSizeLimit }}
      </p>
    </footer>
  </div>
</template>

<style>

.y-file-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  color: #6c757d;
  font-size: 0.75rem;
  line-height: 1;
  text-align: center;
  background-color: var(--color-status-info-lightest);
  border: 2px solid var(--color-border);
  border-style: dashed;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      background: var(--color-status-success-lightest);
    }
  }
}

.y-file-upload--is-over {
  background-color: #007bff;
}

.y-file-upload__body {
  width: 100%;
}

.y-file-upload__list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  list-style: none;
}

.y-file-upload__footer-icon {
  width: 1em;
  height: 1em;
}

.y-file-upload__footer-drag-text {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.y-file-upload__footer-click-text {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  color: var(--color-white);
  text-decoration: none;
  background-color: var(--color-primary);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  appearance: none;

  @media (hover: hover) {
    &:hover {
      background: var(--color-secondary);
      cursor: pointer;
    }
  }
}

.y-file-upload__footer-upload-text {
  margin-top: 1rem;
  margin-bottom: 0;
}

</style>
