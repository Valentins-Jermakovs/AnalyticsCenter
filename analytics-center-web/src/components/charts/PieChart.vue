<template>
  <div class="w-full h-full bg-base-100 p-5 text-base-content">
    <Pie v-if="hasData" :data="chartData" :options="options" />
    <div
      v-else
      class="h-full w-full border border-base-300 bg-base-200 flex flex-col items-center justify-center gap-5"
    >
      <h2 class="text-2xl opacity-50">Nav datu!</h2>
      <font-awesome-icon icon="fa-solid fa-chart-pie" size="2xl" class="opacity-50" />
    </div>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

const colors = [
  'rgb(54, 162, 235)',
  'rgb(255, 159, 64)',
  'rgb(255, 99, 132)',
  'rgb(255, 206, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)'
]

export default {
  name: 'PieChart',
  components: { Pie },

  props: {
    labels: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    hasData() {
      return this.labels.length > 0 && this.data.length > 0
    },

    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: this.title || 'Dataset',
            data: this.data,
            backgroundColor: this.labels.map((_, i) => colors[i % colors.length]),
            borderWidth: 1
          }
        ]
      }
    },

    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right' },
          title: {
            display: !!this.title,
            text: this.title,
            font: { size: 16 }
          }
        }
      }
    }
  }
}
</script>

<style scoped></style>