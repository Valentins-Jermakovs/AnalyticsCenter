<template>
  <div class="w-full h-full border border-base-300 bg-base-100 rounded-box p-4">
    <h3 class="text-lg font-semibold mb-3">{{ title }}</h3>
    <div class="w-full h-64">
      <LineChart :labels="labels" :series="series" />
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.vue'

export default {
  components: { LineChart },
  props: {
    title: String,
    labels: Array,
    series: Array,
  },
}
</script>

<style scoped></style>
