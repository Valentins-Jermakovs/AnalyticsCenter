<template>
  <div class="p-5 flex flex-col gap-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <GenericChart
        v-for="(chart, index) in charts"
        :key="index"
        :title="chart.title"
        :type="chart.type"
        :labels="chart.labels"
        :data="chart.data"
      ></GenericChart>
    </div>
  </div>
</template>

<script setup>
import GenericChart from '@/components/charts/GenericChart.vue'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const charts = computed(() => [
  {
    title: t('system.dashboard.analytics.charts.activity'),
    type: 'line',
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    data: [5, 8, 4, 6, 7, 3, 4],
  },
  {
    title: t('system.dashboard.analytics.charts.profit'),
    type: 'bar',
    labels: ['Неделя 1', 'Неделя 2', 'Неделя 3', 'Неделя 4'],
    data: [200, 450, 300, 500],
  },
  {
    title: t('system.dashboard.analytics.charts.articles'),
    type: 'doughnut',
    labels: ['Новости', 'Обучение', 'Аналитика', 'Развлечения'],
    data: [10, 5, 8, 2],
  },
  {
    title: t('system.dashboard.analytics.charts.tasks_progress'),
    type: 'bar',
    labels: ['Цель 1', 'Цель 2', 'Цель 3', 'Цель 4'],
    data: [80, 50, 30, 100],
  },
  {
    title: t('system.dashboard.analytics.charts.top_actions'),
    type: 'bar',
    labels: ['Создание', 'Чтение', 'Редактирование', 'Удаление'],
    data: [15, 40, 10, 5],
  },
  {
    title: t('system.dashboard.analytics.charts.history'),
    type: 'line',
    labels: ['01/01', '02/01', '03/01', '04/01', '05/01', '06/01', '07/01'],
    data: [2, 4, 3, 5, 6, 3, 4],
  },
])
</script>

<style scoped></style>
