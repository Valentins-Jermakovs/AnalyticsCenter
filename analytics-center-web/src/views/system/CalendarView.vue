<template>
    <Header :title="title" :imageUrl="image"></Header>
    <NavigationPanel v-model="activePage" :buttons="navButtons" />
    <Calendar v-if="activePage === 'calendar'"></Calendar>
    <CalendarEventsList v-if="activePage === 'events'"></CalendarEventsList>
    <CalendarEventsPlanForm v-if="activePage === 'events_planner'"></CalendarEventsPlanForm>
</template>

<script setup>
import Header from '@/components/ui/Header.vue';
import { ref, computed } from 'vue'
// Translations
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const title = computed(() => t('system.calendar.title'))
import calendarImage from '@/assets/images/claudio-guglieri-Qj8haLTfHzs-unsplash.jpg'
import NavigationPanel from '@/components/ui/NavigationPanel.vue'
import Calendar from '@/components/calendar/Calendar.vue';
import CalendarEventsList from '@/components/calendar/CalendarEventsList.vue';
import CalendarEventsPlanForm from '@/components/calendar/CalendarEventsPlanForm.vue';
const image = calendarImage

const activePage = ref('calendar')
const navButtons = computed(() => [
  { title: t('system.calendar.title'), key: 'calendar' },
  { title: t('system.calendar.events'), key: 'events' },
  { title: t('system.calendar.events_planner'), key: 'events_planner' }
])

</script>

<style scoped></style>
