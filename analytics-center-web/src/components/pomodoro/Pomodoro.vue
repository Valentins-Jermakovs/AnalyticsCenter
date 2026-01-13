<template>
  <!-- Timer -->
  <div class="w-full flex-1 flex flex-col p-5">
    <!-- Clock -->
    <div class="flex justify-center">
      <div
        class="bg-base-200 border border-base-300 rounded-box aspect-square w-full max-w-xs flex flex-col items-center justify-center gap-4 text-5xl sm:text-6xl font-bold"
      >
        <span>{{ formattedTime }}</span>

        <font-awesome-icon
          v-if="timerObj.status === 'break'"
          icon="fa-solid fa-coffee"
          class="text-2xl"
        />
        <font-awesome-icon
          v-else-if="timerObj.status === 'work'"
          icon="fa-solid fa-laptop"
          class="text-2xl"
        />
      </div>
    </div>
    <!-- Sessions indicators -->
    <div class="flex justify-center items-center gap-3 p-5">
      <div
        v-for="index in sessionIndicators"
        :key="index"
        class="w-3 h-3 rounded-full border-2 border-neutral"
        :class="{ 'bg-neutral border-neutral': index === timerObj.currentSession }"
      ></div>
    </div>
    <!-- Buttons -->
    <div class="flex justify-center gap-2 flex-wrap">
      <button
        v-for="btn in controls"
        :key="btn.key"
        class="btn btn-neutral"
        :class="btn.size"
        @click="btn.action"
      >
        <font-awesome-icon :icon="btn.icon" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTimerLogic } from '@/composables/usePomodoro'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

// composable — распаковываем всё нужное
const { selectedSession, timerObj, switchSession, launchTimer, stopTimer, resetTimer, nextLaunch } =
  useTimerLogic(t)

const controls = [
  {
    key: 'prev',
    icon: 'fa-solid fa-backward',
    size: 'btn-sm',
    action: () => switchSession('prev'),
  },
  {
    key: 'pause',
    icon: 'fa-solid fa-pause',
    size: 'btn-md',
    action: stopTimer,
  },
  {
    key: 'play',
    icon: 'fa-solid fa-play',
    size: 'btn-lg',
    action: () => nextLaunch(t), // передаём t, чтобы уведомления были на нужном языке
  },
  {
    key: 'reset',
    icon: 'fa-solid fa-arrow-rotate-right',
    size: 'btn-md',
    action: resetTimer,
  },
  {
    key: 'next',
    icon: 'fa-solid fa-forward',
    size: 'btn-sm',
    action: () => switchSession('next'),
  },
]

// Sessions indicators
const sessionIndicators = computed(() =>
  Array.from({ length: selectedSession.value }, (_, index) => index + 1),
)

// Time format
const formattedTime = computed(() => {
  const minutes = Math.floor(timerObj.currentTime / 60)
  const seconds = timerObj.currentTime % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})
</script>

<style scoped></style>
