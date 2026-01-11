// stores/charts.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useChartsStore = defineStore('charts', () => {
  const charts = ref([])  // массив всех графиков

  function addChart(chart) {
    charts.value.push(chart)
  }

  function clearCharts() {
    charts.value = []
  }

  return { charts, addChart, clearCharts }
})
