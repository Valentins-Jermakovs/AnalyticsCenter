<template>
  <div class="w-full h-full bg-base-100 p-5 text-base-content">
    <Bar v-if="hasData" :data="chartData" :options="options" />
    <div
      v-else
      class="h-full w-full border border-base-300 bg-base-200 flex flex-col items-center justify-center gap-5"
    >
      <h2 class="text-2xl opacity-50">Nav datu!</h2>
      <font-awesome-icon icon="fa-solid fa-chart-column" size="2xl" class="opacity-50" />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LinearScale,
  CategoryScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, LinearScale, CategoryScale)

const colors = [
  'rgb(54, 162, 235)',
  'rgb(255, 159, 64)',
  'rgb(255, 99, 132)',
  'rgb(255, 206, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
]

export default {
  name: 'BarChart',
  components: { Bar },

  props: {
    series: Array,
    labels: Array,
    title: String,
  },

  computed: {
    hasData() {
      return this.labels?.length && this.series?.length && this.series.some((s) => s.data?.length)
    },

    chartData() {
      return {
        labels: this.labels,
        datasets: this.series.map((item, index) => {
          const color = colors[index % colors.length]

          return {
            label: item.label ?? `Dataset ${index + 1}`,
            data: item.data,
            backgroundColor: color.replace('rgb', 'rgba').replace(')', ', 0.7)'),
            borderColor: color,
            borderWidth: 1,
          }
        }),
      }
    },

    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top' },
          title: {
            display: !!this.title,
            text: this.title,
          },
        },
        scales: {
          x: {
            grid: { color: 'rgba(176,176,176,0.4)' },
            ticks: { color: '#B0B0B0' },
          },
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(176,176,176,0.4)' },
            ticks: { color: '#B0B0B0' },
          },
        },
      }
    },
  },
}
</script>

<style scoped></style>
