<template>
  <dialog class="modal" :open="open">
    <div class="modal-box w-full max-w-md md:max-w-lg">
      <h3 class="font-bold text-lg">{{ t('system.notifications.create_modal.title') }}</h3>
      <p class="py-4">{{ event.title }}</p>
      <h3 class="font-bold text-lg">{{ t('system.notifications.create_modal.description') }}</h3>
      <p class="py-4">{{ event.description }}</p>
      <div class="modal-action">
        <button class="btn" @click="$emit('close')">{{ t('common.confirm') }}</button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
// Translations
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps({
  open: Boolean,
  event: Object
})
defineEmits(['close'])
</script>

<style scoped></style>