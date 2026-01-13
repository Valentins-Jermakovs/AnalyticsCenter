<template>
  <dialog class="modal" :open="open">
    <div class="modal-box w-full max-w-md md:max-w-lg">
      <h3 class="font-bold text-lg">{{ t('system.notifications.create_modal.window_title') }}</h3>

      <form class="flex flex-col gap-5 mt-5" @submit.prevent="handleAddEvent">
        <!-- Title -->
        <div class="form-control w-full flex flex-col gap-1">
          <label class="label">
            <span class="label-text">{{ t('system.notifications.create_modal.title') }}</span>
          </label>
          <input
            type="text"
            placeholder="Ievadi nosaukumu"
            class="input input-bordered w-full"
            v-model="event.title"
          />
          <p v-if="errors.title" class="text-red-500 text-sm">{{ errors.title }}</p>
        </div>

        <!-- Description -->
        <div class="form-control w-full flex flex-col gap-1">
          <label class="label">
            <span class="label-text">{{ t('system.notifications.create_modal.description') }}</span>
          </label>
          <textarea
            placeholder="Ievadi aprakstu"
            class="textarea textarea-bordered w-full"
            v-model="event.description"
          ></textarea>
          <p v-if="errors.description" class="text-red-500 text-sm">{{ errors.description }}</p>
        </div>

        <!-- Time selection -->
        <div class="form-control w-full flex gap-5">
          <label class="label">
            <span class="label-text">{{ t('system.notifications.create_modal.remind') }}</span>
          </label>
          <NumberSelection :items="workOptions" v-model="event.time" />
        </div>

        <div class="modal-action">
          <button type="submit" class="btn btn-primary">{{ t('common.create') }}</button>
          <button
            type="button"
            class="btn btn-neutral"
            @click="($emit('close'), (errors.title = ''), (errors.description = ''))"
          >
            {{ t('common.cancel') }}
          </button>
        </div>
      </form>
    </div>
  </dialog>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import NumberSelection from '@/components/ui/NumberSelection.vue'

const { t } = useI18n()

defineProps({
  open: Boolean,
  event: Object,
  workOptions: Array,
})
defineEmits(['add-event', 'close'])

const errors = reactive({
  title: '',
  description: '',
})

const handleAddEvent = () => {
  errors.title = event.title?.trim() ? '' : t('errors.empty_field')
  errors.description = event.description?.trim() ? '' : t('errors.empty_field')

  // Если есть ошибки — не эмитим событие
  if (errors.title || errors.description) return

  emit('add-event')
}
</script>

<style scoped></style>
