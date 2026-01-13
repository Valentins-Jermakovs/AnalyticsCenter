<template>
  <div class="flex flex-col rounded-field border border-base-300 bg-base-200 p-5">
    <div class="w-full flex items-center justify-center">
      <h1 class="text-2xl text-center">{{ event ? event.title : 'Nav notikumu' }}</h1>
    </div>
    <div class="w-full mt-3">
      <p>{{ event ? event.description : 'Nav apraksta' }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: Object
})
</script>

<style scoped></style>