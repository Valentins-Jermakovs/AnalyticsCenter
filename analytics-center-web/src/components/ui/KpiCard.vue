<template>
  <div class="flex-1 flex flex-col gap-2 bg-base-200 border border-base-300 p-5 rounded-box">
    <div class="stat-title">{{ title }}</div>
    <div :class="['stat-value', colorClass]">{{ value }}</div>
    <div class="stat-desc">{{ desc }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  value: [String, Number],
  desc: String,
  colorClass: {
    type: String,
    default: 'text-base-content',
  },
})
</script>

<style scoped></style>
