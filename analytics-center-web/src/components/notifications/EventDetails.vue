<template>
  <div class="flex flex-col rounded-field border border-base-300 bg-base-200 p-5">
    <div class="w-full flex items-center justify-center">
      <h1 class="text-2xl text-center">
        {{ event ? event.title : t('system.notifications.event_window.empty_title') }}
      </h1>
    </div>
    <div class="w-full mt-3">
      <p>
        {{ event ? event.description : t('system.notifications.event_window.empty_description') }}
      </p>
    </div>
  </div>
</template>

<script setup>
// Translations
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  event: Object,
})
</script>

<style scoped></style>
