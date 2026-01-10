<template>
  <div class="flex-1 flex flex-col h-full">
    <Header :title="title"></Header>
    <NavigationPanel v-model="activePage" :buttons="navButtons" />

    <!-- List of news (only for read and navigate to details) -->
    <NewsGrid :news="newsList" v-if ="activePage === 'list'" />
    <!-- Administration page (for create, update and delete news) -->
    <NewsAdminPage v-if="activePage === 'admin'" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useNewsStore } from '@/stores/news'
import NewsGrid from '@/components/news/NewsGrid.vue'
import Header from '@/components/ui/Header.vue';
import NavigationPanel from '@/components/ui/NavigationPanel.vue';
import NewsAdminPage from './newsAdminPage.vue';

const title = 'News'
const store = useNewsStore()
const newsList = computed(() => store.filteredNews)

const navButtons = computed(() => [
  { title: 'List', key: 'list' },
  { title: 'Admin', key: 'admin' },
])

const activePage = ref('list')
</script>
