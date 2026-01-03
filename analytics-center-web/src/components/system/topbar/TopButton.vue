<template>
  <button
    class="w-12 h-12 border-0 btn bg-neutral hover:bg-secondary tooltip tooltip-bottom"
    :data-tip="title"
  >
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<style scoped></style>
