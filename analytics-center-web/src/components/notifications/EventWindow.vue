<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-5 bg-base-200 rounded-box border border-base-300 p-5"
  >
    <!-- Event details -->
    <EventDetails :event="currentEvent" />

    <!-- Controls -->
    <EventControls
      :events="events"
      :formatted-time="formattedTime"
      @launch-timer="$emit('launch-timer')"
      @pause-timer="$emit('pause-timer')"
      @delete-event="$emit('delete-event', 0)"
      @new-event="$emit('new-event')"
    />
  </div>
</template>

<script setup>
import EventDetails from './EventDetails.vue'
import EventControls from './EventControls.vue'

// Translations
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps({
  events: Array,
  currentEvent: Object,
  formattedTime: String,
})
defineEmits(['launch-timer', 'pause-timer', 'delete-event', 'new-event'])
</script>
