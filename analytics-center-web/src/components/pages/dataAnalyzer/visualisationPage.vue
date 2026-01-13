<template>
  <div class="xl:p-5 flex items-center justify-center">
    <div class="bg-base-200 w-full xl:w-4/5 flex flex-col gap-5 pb-5">
      <!-- title -->
      <div class="flex items-center justify-center p-5 bg-base-300">
        <h1 class="text-3xl">{{ chartStore.userChart.title }}</h1>
      </div>
      <!-- Charts -->

      <div class="w-full h-150 px-5">
        <!-- Line chart -->
        <LineChart
          v-if="chartStore.userChart.type === 'line'"
          class="border border-base-300"
          :labels="labels"
          :series="series"
          :title="chartStore.userChart.chartTitle"
        />
        <!-- Bar chart (vertical) -->
        <BarChart
          v-else-if="chartStore.userChart.type === 'bar'"
          class="border border-base-300"
          :labels="labels"
          :series="series"
          :title="chartStore.userChart.chartTitle"
        />
        <!-- Bar chart (horizontal) -->
        <HorizontalBarChart
          v-else-if="chartStore.userChart.type === 'barh'"
          class="border border-base-300"
          :labels="labels"
          :series="series"
          :title="chartStore.userChart.chartTitle"
        />
        <!-- Doughnut chart -->
        <DoughnutChart
          v-else-if="chartStore.userChart.type === 'doughnut'"
          class="border border-base-300"
          :labels="labels"
          :data="chartStore.pieData"
          :title="chartStore.userChart.chartTitle"
        />
        <!-- Pie chart -->
        <PieChart
          v-else-if="chartStore.userChart.type === 'pie'"
          class="border border-base-300"
          :labels="labels"
          :data="chartStore.pieData"
          :title="chartStore.userChart.chartTitle"
        />
        <!-- Radar chart -->
        <RadarChart
          v-else-if="chartStore.userChart.type === 'radar'"
          class="border border-base-300"
          :labels="labels"
          :series="series"
          :title="chartStore.userChart.chartTitle"
        />
        <!-- If chart not exist -->
        <div v-else class="flex w-full h-full items-center justify-center">
          <div
            class="w-full h-full flex flex-col items-center justify-center px-3 border border-base-300 rounded-box bg-base-100"
          >
            <h2 class="text-2xl opacity-50 mb-2">{{ $t('common.no_data') }}</h2>
            <font-awesome-icon icon="fa-solid fa-chart-line" size="2xl" class="opacity-50" />
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="flex items-center px-5 w-full">
        <pre class="text-lg wrap-break-words whitespace-pre-wrap">{{
          chartStore.userChart.description
        }}</pre>
      </div>

      <div class="flex flex-wrap w-full gap-2">
        <div
          v-for="stat in chartStore.seriesStats"
          :key="stat.label"
          class="flex flex-col w-full px-5 gap-2"
        >
          <div
            class="flex bg-base-100 border border-base-300 p-3 items-center justify-center rounded-box"
          >
            <h3 class="col-span-full text-xl font-semibold">{{ stat.label }}</h3>
          </div>
          <div class="flex gap-2 flex-wrap">
            <StatCard :label="t('common.sum')" :value="stat.sum" />
            <StatCard :label="t('common.average')" :value="stat.avg" />
            <StatCard :label="t('common.max')" :value="stat.max" />
            <StatCard :label="t('common.min')" :value="stat.min" />
            <StatCard
              :label="t('common.growth')"
              :value="stat.diff[stat.diff.length - 1].toFixed(2)"
            />
          </div>
        </div>
      </div>

      <!-- Верхняя панель с кнопками -->
      <div class="flex p-5">
        <div class="w-full flex justify-center items-center gap-5">
          <button @click="goBack" class="btn btn-lg btn-secondary">{{ $t('common.back') }}</button>
          <button class="btn btn-lg btn-primary">{{ $t('common.save') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useChartStore } from '@/stores/chartData'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const chartStore = useChartStore()

// Charts imports
import LineChart from '@/components/charts/LineChart.vue'
import BarChart from '@/components/charts/BarChart.vue'
import HorizontalBarChart from '@/components/charts/HorizontalBarChart.vue'
import DoughnutChart from '@/components/charts/DoughnutChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
import RadarChart from '@/components/charts/RadarChart.vue'

import StatCard from '@/components/analyzer/StatCard.vue'

// router для перехода назад
const router = useRouter()
const goBack = () => router.back()

// store
const labels = computed(() => chartStore.normalizeChartData.labels)
const series = computed(() => chartStore.normalizeChartData.series)

// clear store after unmount
onUnmounted(() => {
  chartStore.clearChart()
})
</script>

<style scoped></style>
