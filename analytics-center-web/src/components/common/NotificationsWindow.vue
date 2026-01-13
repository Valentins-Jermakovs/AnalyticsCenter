<template>
  <dialog class="modal" :open="NotificationWindow">
    <div class="modal-box flex flex-col gap-3 justify-center">
      <h3 class="text-lg font-bold">{{ t('system.notifications.notification_modal.title_modal') }}</h3>

      <p>
        <span class="text-info">{{ t('system.notifications.notification_modal.title') }}</span>
        {{ events.length > 0 ? events[0].title : t('system.notifications.notification_modal.empty_title') }}
      </p>

      <p>
        <span class="text-info">{{ t('system.notifications.notification_modal.description') }}</span>
        {{ events.length > 0 ? events[0].description : t('system.notifications.notification_modal.empty_description') }}
      </p>

      <div class="modal-action">
        <button class="btn btn-primary" @click="closeNotificationWindow">{{ t('common.confirm') }}</button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
// Translations
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useEventPlanner } from '@/composables/useEventPlanner'
const { NotificationWindow, events, closeNotificationWindow } = useEventPlanner()
</script>

<style scoped></style>
