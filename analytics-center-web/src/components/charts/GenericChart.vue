<template>
  <div class="bg-base-200 p-4 border border-base-300 rounded-box h-72 flex flex-col">
    <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
    <div class="flex-1 relative overflow-hidden">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const props = defineProps({
  title: String,
  type: {
    type: String,
    default: 'line', // 'line', 'bar', 'doughnut', 'pie'
  },
  labels: Array,
  data: Array, // [1, 2, 3, 4, 5]
})

const chartCanvas = ref(null)

onMounted(() => {
  new Chart(chartCanvas.value, {
    type: props.type,
    data: {
      labels: props.labels,
      datasets: [
        {
          label: props.title,
          data: props.data,
          backgroundColor: [
            'rgba(15, 98, 254, 0.8)',   // blue
            'rgba(36, 161, 72, 0.8)',   // green
            'rgba(138, 63, 252, 0.8)',  // purple
            'rgba(255, 131, 43, 0.8)',  // orange
            'rgba(218, 30, 40, 0.8)',   // red
            'rgba(0, 157, 220, 0.8)',   // cyan
            'rgba(141, 141, 141, 0.8)', // gray
            'rgba(198, 198, 198, 0.8)', // light gray ← вместо чёрного
            'rgba(82, 4, 163, 0.8)',    // deep purple
            'rgba(0, 125, 121, 0.8)',   // teal
          ],
          borderColor: [
            'rgba(15, 98, 254, 0.6)',
            'rgba(36, 161, 72, 0.6)',
            'rgba(138, 63, 252, 0.6)',
            'rgba(255, 131, 43, 0.6)',
            'rgba(218, 30, 40, 0.6)',
            'rgba(0, 157, 220, 0.6)',
            'rgba(141, 141, 141, 0.6)',
            'rgba(0, 0, 0, 0.4)',
            'rgba(82, 4, 163, 0.6)',
            'rgba(0, 125, 121, 0.6)',
          ],
          borderWidth: 2,
          fill: props.type === 'line' ? true : false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
        },
      },
      // scales only for non pie charts
      scales:
        props.type === 'pie' || props.type === 'doughnut'
          ? {}
          : {
              x: {
                ticks: {
                  color: '#B0B0B0',
                },
                grid: {
                  color: 'rgba(176, 176, 176, 0.5)',
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  color: '#B0B0B0',
                },
                grid: {
                  color: 'rgba(176, 176, 176, 0.5)',
                },
              },
            },
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,
          padding: 20,
          backgroundColor: 'rgba(0, 0, 0, 1)',
          boxPadding: 10,
          caretSize: 10,
          cornerRadius: 1,
        },
      },
    },
  })
})
</script>
