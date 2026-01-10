<template>
  <div class="flex-1 bg-base-100 p-5">
    <NewsSearch></NewsSearch>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <NewsCard v-for="item in news" :key="item.id" :news="item" />
    </div>
  </div>
</template>

<script setup>
import NewsCard from './NewsCard.vue'
import NewsSearch from './NewsSearch.vue'

defineProps({
  news: Array,
})
</script>
