<template>
  <div
    class="card bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition"
  >
    <div class="card-body gap-2">
      <!-- Title -->
      <h3 class="card-title text-lg">
        {{ title }}
      </h3>

      <!-- Date & time -->
      <div class="flex items-center gap-2 text-sm text-base-content/70">
        <span>{{ date }}</span>
        <span>•</span>
        <span>{{ time }}</span>
      </div>

      <!-- Actions -->
      <div class="card-actions justify-end mt-2">
        <button class="btn btn-sm btn-neutral">
          {{ t('common.read') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
})
</script>
