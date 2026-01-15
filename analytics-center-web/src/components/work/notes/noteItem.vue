<template>
  <div
    class="flex flex-col bg-base-200 border border-base-300 rounded-box p-5 gap-3 flex-1"
  >

    <!-- HEADER -->
    <div class="flex items-start justify-between gap-3">

      <div class="flex flex-col gap-1">
        <h2 class="text-lg font-semibold leading-tight">
          {{ note.title }}
        </h2>
      </div>

      <!-- actions -->
      <div class="flex items-center gap-2">
        <button
          class="btn btn-neutral btn-sm"
          @click="edit"
          aria-label="Edit note"
        >
          <font-awesome-icon icon="fa-solid fa-pen" />
        </button>

        <button
          class="btn btn-neutral btn-sm text-error"
          @click="remove"
          aria-label="Delete note"
        >
          <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
      </div>

    </div>

    <!-- CONTENT -->
    <div class="text-sm whitespace-pre-line flex-1">
      {{ note.content }}
    </div>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  note: {
    type: Object,
    required: true,
    // expected:
    // { id, title, content }
  },
})

const emit = defineEmits(['edit', 'delete'])

const edit = () => {
  emit('edit', props.note)
}

const remove = () => {
  emit('delete', props.note.id)
}
</script>

<style scoped>
</style>
