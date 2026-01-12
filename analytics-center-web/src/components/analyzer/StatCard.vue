<!-- StatCard.vue -->
<template>
  <div class="bg-base-100 border border-base-300 p-4 flex flex-col flex-1 items-center justify-center">
    <span class="text-sm text-gray-500">{{ label }}</span>
    <span class="text-2xl font-bold">{{ value }}<span v-if="unit">{{ unit }}</span></span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  value: { type: [String, Number], required: true },
  unit: { type: String, default: '' },
})
</script>

<style scoped></style>