<template>
  <div class="bg-base-200 border border-base-300 rounded-box p-5">
    <div class="flex justify-between items-center gap-2">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <span :class="['text-xl font-bold', colorClass]">{{ percent }}%</span>
    </div>
    <progress :class="['progress', progressClass, 'w-full']" :value="value" :max="max"></progress>
    <div class="text-sm text-base-content/70 text-right">{{ value }} / {{ max }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: Number,
  max: Number,
  percent: Number,
  colorClass: { type: String, default: 'text-success' },
  progressClass: { type: String, default: 'progress-success' },
})
</script>

<style scoped></style>
