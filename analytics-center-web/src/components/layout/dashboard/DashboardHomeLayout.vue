<template>
  <div class="flex flex-col gap-5 p-5">
    <!-- Last news -->
    <div class="w-full">
      <NewsCard
        :title="lastNews.title"
        :summary="lastNews.summary"
        :image="lastNews.image"
      ></NewsCard>
    </div>

    <!-- Last event -->
    <div class="w-full">
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
      ></ProgressCard>
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

const testEvent = {
  title: 'Test event',
  date: '2023-01-01',
  time: '12:00',
  description: 'This is a test event',
}

const kpis = [
  { title: 'Личный доход', value: '1200€', desc: 'За этот месяц', colorClass: 'text-success' },
  { title: 'Новые задачи', value: 12, desc: 'Поступило сегодня', colorClass: 'text-info' },
  { title: 'Активные проекты', value: 4, desc: 'Текущие проекты', colorClass: 'text-primary' },
  {
    title: 'Пропущенные события',
    value: 2,
    desc: 'За последнюю неделю',
    colorClass: 'text-warning',
  },
]

const progressCards = [
  {
    title: 'Цели месяца',
    value: 3,
    max: 5,
    percent: 60,
    colorClass: 'text-primary',
    progressClass: 'progress-primary',
  },
  {
    title: 'Задачи в проекте',
    value: 15,
    max: 20,
    percent: 75,
    colorClass: 'text-success',
    progressClass: 'progress-success',
  },
  {
    title: 'Прочитанные статьи',
    value: 8,
    max: 12,
    percent: 67,
    colorClass: 'text-info',
    progressClass: 'progress-info',
  },
  {
    title: 'Обработанные файлы',
    value: 20,
    max: 50,
    percent: 40,
    colorClass: 'text-warning',
    progressClass: 'progress-warning',
  },
]

const columns = ['Дата', 'Время', 'Название', 'Категория', 'Статус']

const rows = [
  {
    Дата: '01/01/2026',
    Время: '10:30',
    Название: 'Практическая работа',
    Категория: 'Учёба',
    Статус: 'Завершено',
  },
  {
    Дата: '02/01/2026',
    Время: '14:00',
    Название: 'Загрузка данных',
    Категория: 'Проект',
    Статус: 'В процессе',
  },
  {
    Дата: '03/01/2026',
    Время: '09:00',
    Название: 'Онлайн-курс',
    Категория: 'Обучение',
    Статус: 'Завершено',
  },
]

const lastNews = {
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  image: 'src/assets/images/aron-yigin-x1HnjrnppKQ-unsplash.jpg',
}
</script>

<style scoped></style>
