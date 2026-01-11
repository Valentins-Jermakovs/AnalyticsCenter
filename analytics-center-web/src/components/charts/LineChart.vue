<template>
    <!-- Line chart -->
  <div class="w-full h-full bg-base-100 p-5 text-base-content">
    <Line v-if="hasData" :data="chartData" :options="options" />
    <div v-else
      class="h-full w-full border border-base-300 bg-base-200 rounded-box flex flex-col items-center justify-center gap-5">
      <h2 class="text-2xl opacity-50">Nav datu!</h2>
      <font-awesome-icon icon="fa-solid fa-chart-line" size="2xl" class="opacity-50" />
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Filler
)

// Colors for lines
const colors = [
  'rgb(54, 162, 235)',   // Blue
  'rgb(255, 159, 64)',    // Orange
  'rgb(255, 99, 132)',   // Red
  'rgb(255, 206, 86)',   // Yellow
  'rgb(75, 192, 192)',   // Green
  'rgb(153, 102, 255)'   // Purple
]

export default {
  name: 'LineChart',
  components: { Line },

  props: {
    series: {
      type: Array,
      default: () => []
    },
    labels: {
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
      return (
        Array.isArray(this.labels) &&
        this.labels.length > 0 &&
        Array.isArray(this.series) &&
        this.series.length > 0 &&
        this.series.some(s => Array.isArray(s.data) && s.data.length > 0)
      )
    },
    chartData() {
      return {
        labels: this.labels,
        datasets: this.series.map((item, index) => {
          const color = colors[index % colors.length]

          return {
            label: item.label ?? `Dataset ${index + 1}`,
            data: item.data,
            borderColor: color,
            backgroundColor: color
              .replace('rgb', 'rgba')
              .replace(')', ', 0.25)'),
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 4,
            pointHoverRadius: 6,
            fill: true
          }
        })
      }
    },

    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            padding: 20,
            backgroundColor: 'rgba(0, 0, 0, 1)',
            boxPadding: 10,
            caretSize: 10,
            cornerRadius: 1
          },
          title: {
            display: !!this.title,
            text: this.title,
            font: { size: 16 }
          }
        },
        scales: {
          x: {
            ticks: {
              color: '#B0B0B0'
            },
            grid: {
              color: 'rgba(176, 176, 176, 0.5)'
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: '#B0B0B0'
            },
            grid: {
              color: 'rgba(176, 176, 176, 0.5)'
            }
          }
        },
        animations: {
          numbers: {
            duration: 1000,
            easing: 'linear'
          }
        }
      }
    }
  }
}
</script>


<style scoped></style>
