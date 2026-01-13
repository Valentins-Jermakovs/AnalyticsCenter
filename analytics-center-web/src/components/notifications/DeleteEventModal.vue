<template>
  <dialog class="modal" :open="open">
    <div class="modal-box flex flex-col gap-3 w-full max-w-md md:max-w-lg">
      <h3 class="text-lg font-bold">{{ t('common.delete') }} ?</h3>
      <div class="modal-action">
        <button class="btn btn-error" @click="$emit('delete')">{{ t('common.delete') }}</button>
        <button class="btn btn-ghost" @click="$emit('close')">{{ t('common.cancel') }}</button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
// Translations
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps({ open: Boolean })
defineEmits(['delete', 'close'])
</script>

<style scoped></style>
