<template>
  <div class="flex flex-col flex-1 items-center gap-6">
    <!-- Timer settings form -->
    <div class="w-full max-w-xl p-4 sm:p-6 flex flex-col gap-4">
      <div
        v-for="field in settingsFields"
        :key="field.key"
        class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
      >
        <label class="label p-0 sm:w-1/2">
          <span class="label-text text-base sm:text-lg">
            {{ field.label }}
          </span>
        </label>

        <div class="w-full sm:w-1/2">
          <NumberSelection :items="field.options" v-model="field.model.value" />
        </div>
      </div>
    </div>

    <!-- Action button -->
    <button class="btn btn-primary lg:btn-lg px-10" @click="confirmSettings">
      {{ t('common.confirm') }}
    </button>
  </div>
</template>

<script setup>
import { useTimerLogic } from '@/composables/usePomodoro'
import NumberSelection from '../ui/NumberSelection.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { defineEmits } from 'vue'
const emit = defineEmits(['switch-to-timer'])

const {
  timer,
  settings,
  selectedSession,
  selectedWork,
  selectedBreak,
  tempSelectedSession,
  tempSelectedWork,
  tempSelectedBreak,
  nextLaunch,
} = useTimerLogic(t)

const makeOptions = (values, suffix = '') =>
  values.map((v) => ({
    value: v,
    title: suffix ? `${v} ${suffix}` : String(v),
  }))

const settingsFields = [
  {
    key: 'sessions',
    label: t('system.pomodoro.sessions_number'),
    options: makeOptions([2, 3, 4, 5, 6, 7, 8]),
    model: tempSelectedSession,
  },
  {
    key: 'work',
    label: t('system.pomodoro.work_time'),
    options: makeOptions([20, 25, 30, 45, 60], 'min'),
    model: tempSelectedWork,
  },
  {
    key: 'break',
    label: t('system.pomodoro.break_time'),
    options: makeOptions([5, 10, 15, 20, 25], 'min'),
    model: tempSelectedBreak,
  },
]

const confirmSettings = () => {
  timer.value = true
  settings.value = false

  selectedSession.value = tempSelectedSession.value
  selectedWork.value = tempSelectedWork.value
  selectedBreak.value = tempSelectedBreak.value

  // switch to timer
  emit('switch-to-timer')
}
</script>

<style scoped></style>
