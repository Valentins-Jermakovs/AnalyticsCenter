<template>
  <div class="w-full h-full bg-base-100 p-5 text-base-content">
    <Radar v-if="hasData" :data="chartData" :options="options" />
    <div
      v-else
      class="h-full w-full border border-base-300 bg-base-200 flex flex-col items-center justify-center gap-5"
    >
      <h2 class="text-2xl opacity-50">Nav datu!</h2>
      <font-awesome-icon icon="fa-solid fa-chart-area" size="2xl" class="opacity-50" />
    </div>
  </div>
</template>

<script>
import { Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, RadialLinearScale, PointElement, LineElement, Filler)

const colors = [
  'rgb(54, 162, 235)',
  'rgb(255, 159, 64)',
  'rgb(255, 99, 132)',
  'rgb(255, 206, 86)',
  'rgb(75, 192, 192)',
  'rgb(153, 102, 255)',
]

export default {
  name: 'RadarChart',
  components: { Radar },

  props: {
    series: {
      type: Array,
      default: () => [],
    },
    labels: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },

  computed: {
    hasData() {
      return (
        this.labels.length > 0 &&
        this.series.length > 0 &&
        this.series.some((s) => Array.isArray(s.data) && s.data.length > 0)
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
            backgroundColor: color.replace('rgb', 'rgba').replace(')', ', 0.25)'),
            borderWidth: 2,
            pointRadius: 3,
            pointHoverRadius: 5,
            fill: true,
          }
        }),
      }
    },

    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: !!this.title,
            text: this.title,
            font: { size: 16 },
          },
          tooltip: {
            padding: 16,
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            angleLines: {
              color: 'rgba(176,176,176,0.4)',
            },
            grid: {
              color: 'rgba(176,176,176,0.4)',
            },
            pointLabels: {
              color: '#B0B0B0',
              font: {
                size: 12,
              },
            },
            ticks: {
              color: '#B0B0B0',
              backdropColor: 'transparent',
            },
          },
        },
      }
    },
  },
}
</script>

<style scoped></style>
