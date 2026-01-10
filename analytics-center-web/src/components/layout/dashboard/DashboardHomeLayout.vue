<template>
  <div class="flex flex-col gap-5 p-5">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <NewsCard
        :title="lastNews.title"
        :summary="lastNews.summary"
        :image="lastNews.image"
      ></NewsCard>
      <EventCard
        :title="testEvent.title"
        :date="testEvent.date"
        :time="testEvent.time"
        :description="testEvent.description"
      ></EventCard>
    </div>

    <!-- KPI cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <KpiCard
        v-for="(item, index) in kpis"
        :key="index"
        :title="item.title"
        :value="item.value"
        :desc="item.desc"
        :colorClass="item.colorClass"
      ></KpiCard>
    </div>

    <!-- Progress cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <ProgressCard
        v-for="(item, index) in progressCards"
        :key="index"
        :title="item.title"
        :value="item.value"
        :max="item.max"
        :percent="item.percent"
        :colorClass="item.colorClass"
        :progressClass="item.progressClass"
      >
      </ProgressCard>
    </div>

    <!-- Activity / Data table -->
    <div class="w-full overflow-x-auto">
      <DataTable :columns="columns" :rows="rows"></DataTable>
    </div>
  </div>
</template>

<script setup>
import DataTable from '@/components/ui/DataTable.vue'
import EventCard from '@/components/ui/EventCard.vue'
import KpiCard from '@/components/ui/KpiCard.vue'
import NewsCard from '@/components/ui/NewsCard.vue'
import ProgressCard from '@/components/ui/ProgressCard.vue'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const testEvent = {
  title: 'Test event',
  date: '2023-01-01',
  time: '12:00',
  description: 'This is a test event',
}

const kpis = computed(() => [
  {
    title: t('system.dashboard.home.kpi.finance.title'),
    value: '1200€',
    desc: t('system.dashboard.home.kpi.finance.description'),
    colorClass: 'text-success',
  },
  {
    title: t('system.dashboard.home.kpi.tasks.title'),
    value: 12,
    desc: t('system.dashboard.home.kpi.tasks.description'),
    colorClass: 'text-info',
  },
  {
    title: t('system.dashboard.home.kpi.projects.title'),
    value: 4,
    desc: t('system.dashboard.home.kpi.projects.description'),
    colorClass: 'text-primary',
  },
  {
    title: t('system.dashboard.home.kpi.events.title'),
    value: 2,
    desc: t('system.dashboard.home.kpi.events.description'),
    colorClass: 'text-warning',
  },
])

const progressCards = computed(() => [
  {
    title: t('system.dashboard.home.progress_cards.tasks.title'),
    value: 3,
    max: 5,
    percent: 60,
    colorClass: 'text-primary',
    progressClass: 'progress-primary',
  },
  {
    title: t('system.dashboard.home.progress_cards.project.title'),
    value: 15,
    max: 20,
    percent: 75,
    colorClass: 'text-success',
    progressClass: 'progress-success',
  },
  {
    title: t('system.dashboard.home.progress_cards.articles.title'),
    value: 8,
    max: 12,
    percent: 67,
    colorClass: 'text-info',
    progressClass: 'progress-info',
  },
  {
    title: t('system.dashboard.home.progress_cards.files.title'),
    value: 20,
    max: 50,
    percent: 40,
    colorClass: 'text-warning',
    progressClass: 'progress-warning',
  },
])

const columns = computed(() => [
  { key: 'date', label: t('columns.date') },
  { key: 'time', label: t('columns.time') },
  { key: 'title', label: t('columns.title') },
  { key: 'category', label: t('columns.category') },
  { key: 'status', label: t('columns.status') },
])

const rows = [
  {
    date: '01/01/2026',
    time: '10:30',
    title: 'Praktiskais darbs',
    category: 'Mācības',
    status: 'done',
  },
  {
    date: '02/01/2026',
    time: '14:00',
    title: 'Datu augšupielāde',
    category: 'Projekts',
    status: 'in_progress',
  },
]

const lastNews = {
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  image: 'src/assets/images/aron-yigin-x1HnjrnppKQ-unsplash.jpg',
}
</script>

<style scoped></style>
