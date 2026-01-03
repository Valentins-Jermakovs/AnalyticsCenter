<template>
  <div class="w-full h-56 bg-base-200 flex items-end justify-start p-5">
    <h1 class="text-6xl font-light ml-25">{{ title }}</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style scoped></style>
