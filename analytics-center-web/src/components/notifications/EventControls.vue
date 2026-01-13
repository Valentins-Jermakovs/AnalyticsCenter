<template>
  <div class="flex flex-col gap-3">
    <div class="flex bg-base-200 rounded-field p-5 items-center justify-center">
      <h1 class="text-4xl">{{ formattedTime }}</h1>
    </div>
    <div class="flex flex-col sm:flex-row justify-around gap-3">
      <button class="btn btn-secondary flex-1 p-3 text-2xl" @click="$emit('pause-timer')" :disabled="!events.length">
        <font-awesome-icon icon="fa-solid fa-pause" />
      </button>
      <button class="btn btn-primary flex-1 p-3 text-2xl" @click="$emit('launch-timer')" :disabled="!events.length">
        <font-awesome-icon icon="fa-solid fa-play" />
      </button>
      <button class="btn btn-error flex-1 p-3 text-2xl" @click="$emit('delete-event')" :disabled="!events.length">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </button>
    </div>
    <div class="flex justify-center items-center mt-3">
      <button class="btn btn-primary flex-1" @click="$emit('new-event')">
        {{ $t('common.create') }}
      </button>
    </div>
  </div>
</template>

<script setup>
// Translations
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  events: Array,
  formattedTime: String
})
defineEmits(['launch-timer', 'pause-timer', 'delete-event', 'new-event'])
</script>

<style scoped></style>