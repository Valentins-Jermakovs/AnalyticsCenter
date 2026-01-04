<template>
  <div class="flex-1 card bg-base-200 card-border border-base-300">
    <figure class="h-40 overflow-hidden">
      <img :src="image" alt="News image" class="w-full h-full object-cover" />
    </figure>
    <div class="card-body gap-3">
      <h2 class="card-title text-lg">{{ title }}</h2>
      <p class="text-sm text-base-content/70 line-clamp-3">{{ summary }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-outline btn-info">{{ $t('common.read') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  summary: String,
  image: String,
})
</script>

<style scoped></style>
