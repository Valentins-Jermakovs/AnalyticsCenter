// stores/chartData.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useChartStore = defineStore('charts', () => {
  // user chart object
  const userChart = ref({
    type: '',
    title: '',
    chartTitle: '',
    description: '',
    xAxis: '',
    seriesLabels: [''],
    seriesData: [''],
  })

  function addChart(chart) {
    userChart.value = { ...chart } // create a copy for reactivity
  }

  function clearChart() {
    userChart.value = {
      type: '',
      title: '',
      chartTitle: '',
      description: '',
      xAxis: '',
      seriesLabels: [''],
      seriesData: [''],
    }
  }

  // === Data normalizer for chart.js ===
  const normalizeChartData = computed(() => {
    const chart = { ...userChart.value }

    // labels
    const labels = chart.xAxis.split(',').map(label => label.trim())

    // series
    const series = chart.seriesData.map((dataStr, i) => ({
      label: chart.seriesLabels[i] || `Series ${i + 1}`,
      // label - get label from seriesLabels for each series
      // if seriesLabels is empty, use default label
      data: dataStr.split(',').map(n => Number(n.trim()))
      // data - get data from seriesData for each series, and convert to number
    }))

    return {
      labels,
      series
    }
  })

  const seriesStats = computed(() =>
    normalizeChartData.value.series.map(s => {
      const sum = Number(s.data.reduce((a, b) => a + b, 0).toFixed(2))
      const avg = Number((sum / s.data.length).toFixed(2))
      const min = Number(Math.min(...s.data).toFixed(2))
      const max = Number(Math.max(...s.data).toFixed(2))
      const diff = s.data.map((v, i, a) => i === 0 ? 0 : Number((v - a[i - 1]).toFixed(2)))
      return { label: s.label, sum, avg, min, max, diff }
    })
  )

  return { userChart, addChart, clearChart, normalizeChartData, seriesStats }
})
