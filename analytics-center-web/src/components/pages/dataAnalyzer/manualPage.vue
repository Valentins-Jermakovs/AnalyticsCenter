<template>
  <!-- manual data visualisation page -->
  <div class="p-5">
    <div
      class="
        grid gap-4
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      <ChartCard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :icon="card.icon"
      />
    </div>
  </div>
</template>

<script setup>
import ChartCard from '@/components/analyzer/chartsCard.vue'


import lineChart from '@/assets/icons/chart--multi-line.svg'
import columnChart from '@/assets/icons/chart--column.svg'
import barChartStacked from '@/assets/icons/chart--bar-stacked.svg'
import pieChart from '@/assets/icons/chart--pie.svg'
import doughnutChart from '@/assets/icons/chart--donut.svg'
import radarChart from '@/assets/icons/chart--radar.svg'
import sunburstChart from '@/assets/icons/chart--sunburst.svg'
const cards = [
    {title: 'Lineārais grafiks', description: 'Attēlo datu grafiku līnijās', icon: lineChart},
    {title: 'Lineārais grafiks', description: 'Attēlo datu grafiku līnijās', icon: columnChart},
    {title: 'Lineārais grafiks', description: 'Attēlo datu grafiku līnijās', icon: barChartStacked},
    {title: 'Lineārais grafiks', description: 'Attēlo datu grafiku līnijās', icon: pieChart},
    {title: 'Lineārais grafiks', description: 'Attēlo datu grafiku līnijās', icon: doughnutChart},
    {title: 'Lineārais grafiks', description: 'Attēlo datu grafiku līnijās', icon: sunburstChart},
    {title: 'Lineārais grafiks', description: 'Attēlo datu grafiku līnijās', icon: radarChart},
]
</script>

<style scoped></style>