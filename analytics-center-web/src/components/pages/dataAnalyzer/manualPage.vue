<template>
  <div class="p-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <LineCard></LineCard>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChartCard from '@/components/analyzer/chartsCard.vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'

import lineChart from '@/assets/icons/chart--multi-line.svg'
import columnChart from '@/assets/icons/chart--column.svg'
import barChartStacked from '@/assets/icons/chart--bar-stacked.svg'
import pieChart from '@/assets/icons/chart--pie.svg'
import doughnutChart from '@/assets/icons/chart--donut.svg'
import radarChart from '@/assets/icons/chart--radar.svg'
import sunburstChart from '@/assets/icons/chart--sunburst.svg'

import LineCard from '@/components/analyzer/LineCard.vue'
import VisualisationPage from './visualisationPage.vue'
</script>

<style scoped></style>
