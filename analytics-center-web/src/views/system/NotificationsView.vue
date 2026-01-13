<template>
  <Header :title="title" :imageUrl="image"></Header>

  <div class="flex flex-col gap-5 p-5">

    <!-- Event window -->
    <EventWindow
      :events="events"
      :current-event="events[0]"
      :formatted-time="formattedTime"
      @launch-timer="launchTimer"
      @pause-timer="pauseTimer"
      @delete-event="launchDeleteEvents"
      @new-event="newEventModal"
    />

    <!-- Event creation modal -->
    <EventModal
      v-model:open="newModal"
      :event="newEvent"
      :work-options="workOptions"
      @add-event="addEvent"
      @close="newEventModal"
    />

    <!-- List of events -->
    <EventList
      :events="events"
      @read-event="readEvent"
      @delete-event="launchDeleteEvents"
      @new-event="newEventModal"
    />

    <!-- Read event modal -->
    <ReadEventModal
      v-model:open="readModal"
      :event="currentEvent"
      @close="readEventModal"
    />

    <!-- Delete event modal -->
    <DeleteEventModal
      v-model:open="deleteModal"
      @delete="deleteSelectedEvents"
      @close="abortDelete"
    />
  </div>
</template>

<script setup>
import Header from '@/components/ui/Header.vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useEventPlanner } from '@/composables/useEventPlanner'

// Components
import EventWindow from '@/components/notifications/EventWindow.vue'
import EventModal from '@/components/notifications/EventModal.vue'
import EventList from '@/components/notifications/EventList.vue'
import ReadEventModal from '@/components/notifications/ReadEventModal.vue'
import DeleteEventModal from '@/components/notifications/DeleteEventModal.vue'

const { t } = useI18n()
const title = computed(() => t('system.notifications.title'))
import notificationImage from '@/assets/images/igor-omilaev-GCakG_Kr0UM-unsplash.jpg'
const image = notificationImage

const {
  events,
  newEvent,
  newModal,
  deleteModal,
  addEvent,
  deleteSelectedEvent,
  newEventModal,
  formattedTime,
  launchTimer,
  pauseTimer,
  deleteSelectedEvents,
  launchDeleteEvents,
  abortDelete,
  readEvent,
  readModal,
  readEventModal,
  currentEvent,
} = useEventPlanner()

const workOptions = [
  { title: '1 min', value: 1 },
  { title: '5 min', value: 5 },
  { title: '10 min', value: 10 },
  { title: '20 min', value: 20 },
  { title: '30 min', value: 30 },
  { title: '40 min', value: 40 },
  { title: '50 min', value: 50 },
  { title: '60 min', value: 60 },
]
</script>
