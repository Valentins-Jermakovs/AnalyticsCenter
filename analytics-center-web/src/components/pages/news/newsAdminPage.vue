<template>
  <div class="flex flex-col gap-5 p-5">
    <div class="flex gap-3 items-center">
        <NewsSearch></NewsSearch>
        <button class="w-1/12 btn">create</button>
    </div>
    <!-- Table of news -->
    <div class="w-full overflow-x-auto">
      <DataTable
        :columns="columns"
        :rows="newsRows"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useNewsStore } from '@/stores/news'
import NewsSearch from '@/components/news/NewsSearch.vue';
import DataTable from '@/components/ui/DataTable.vue'

const store = useNewsStore()

const columns = computed(() => [
  { key: 'createdAt', label: 'Date' },
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description' },
])

const newsRows = computed(() =>
  store.filteredNews.map(n => ({
    id: n.id,
    createdAt: n.createdAt,
    title: n.title,
    description: n.description,
  }))
)

</script>

<style scoped></style>