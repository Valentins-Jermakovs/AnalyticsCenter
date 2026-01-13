<template>
  <dialog class="modal" :open="NotificationWindow">
    <div class="modal-box bg-base-200 flex flex-col gap-3 justify-center">
      <h3 class="text-lg font-bold">Atgādinājums!</h3>
      <p v-if="events.length > 0"><span class="text-info">Notikums:</span> {{ events[0].title }}</p>
      <p v-else><span class="text-info">Notikums:</span> Nav notikuma</p>
      <p v-if="events.length > 0">
        <span class="text-info">Apraksts:</span> {{ events[0].description }}
      </p>
      <p v-else><span class="text-info">Apraksts:</span> Nav apraksta</p>
      <div class="modal-action">
        <button class="btn btn-primary" @click="closeNotificationWindow">OK</button>
      </div>
    </div>
  </dialog>
</template>

<script>
import { useEventPlanner } from '@/composables/useEventPlanner'
export default {
  name: 'NotificationWindow',
  setup() {
    return useEventPlanner()
  },
}
</script>

<style scoped></style>
