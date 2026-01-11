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
  name: 'MultiSeriesPieChartOfficial',
  components: { Pie },

  props: {
    labels: {
      type: Array,
      required: true
    },
    series: {
      type: Array, // [{ label: string, data: number[] }]
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    hasData() {
      return (
        this.labels.length > 0 &&
        this.series.length > 0 &&
        this.series.some(s => Array.isArray(s.data) && s.data.length > 0)
      )
    },

    chartData() {
      // каждый dataset отдельный круг
      return {
        labels: this.labels,
        datasets: this.series.map((item, idx) => ({
          label: item.label ?? `Dataset ${idx + 1}`,
          data: item.data,
          backgroundColor: item.data.map((_, i) => colors[i % colors.length]),
          borderWidth: 1
        }))
      }
    },

    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              generateLabels: function(chart) {
                // дефолтные лейблы
                const original = ChartJS.overrides.pie.plugins.legend.labels.generateLabels
                const labelsOriginal = original.call(this, chart)

                // цвета всех датасетов
                let datasetColors = chart.data.datasets.map(ds => ds.backgroundColor).flat()

                labelsOriginal.forEach(label => {
                  // определяем datasetIndex (для multi-series)
                  label.datasetIndex = Math.floor(label.index / chart.data.labels.length)
                  // видимость
                  label.hidden = !chart.isDatasetVisible(label.datasetIndex)
                  // цвет соответствующего сектора
                  label.fillStyle = datasetColors[label.index]
                })

                return labelsOriginal
              }
            },
            onClick: function(mouseEvent, legendItem, legend) {
              const datasetMeta = legend.chart.getDatasetMeta(legendItem.datasetIndex)
              datasetMeta.hidden = !legend.chart.isDatasetVisible(legendItem.datasetIndex)
              legend.chart.update()
            }
          },
          tooltip: {
            callbacks: {
              title: function(context) {
                const datasetLength = context[0].chart.data.labels.length
                const labelIndex = context[0].datasetIndex * datasetLength + context[0].dataIndex
                return context[0].chart.data.labels[labelIndex] + ': ' + context[0].formattedValue
              }
            }
          },
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