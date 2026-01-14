<template>
  <div class="flex flex-col gap-5 p-5">
    <div class="bg-base-200 border border-base-300 rounded-box p-3 overflow-x-auto">
      <CalendarHeader
        :year="currentYear"
        :month="currentMonth"
        :months="months"
        @prev="prevMonth"
        @next="nextMonth"
      />

      <CalendarGrid :days="calendarDays" :isToday="isToday" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 bg-base-200 p-3 border border-base-300">
      <EventCard v-for="i in 3" :key="i" title="Notikums" date="17/01/2025" time="10:30 - 11:30" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CalendarHeader from './CalendarHeader.vue'
import CalendarGrid from './CalendarGrid.vue'
import EventCard from './EventCard.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const months = computed(() => [
  t('system.calendar.months.january'),
  t('system.calendar.months.february'),
  t('system.calendar.months.march'),
  t('system.calendar.months.april'),
  t('system.calendar.months.may'),
  t('system.calendar.months.june'),
  t('system.calendar.months.july'),
  t('system.calendar.months.august'),
  t('system.calendar.months.september'),
  t('system.calendar.months.october'),
  t('system.calendar.months.november'),
  t('system.calendar.months.december'),
])

const currentYear = ref(new Date().getFullYear())
const currentMonth = ref(new Date().getMonth())

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  let startDay = firstDay.getDay() - 1
  if (startDay < 0) startDay = 6

  const daysInMonth = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()

  const days = []
  for (let i = 0; i < startDay; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)
  while (days.length % 7 !== 0) days.push(null)

  return days
})

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

function isToday(day) {
  const today = new Date()
  return (
    day === today.getDate() &&
    currentMonth.value === today.getMonth() &&
    currentYear.value === today.getFullYear()
  )
}
</script>
