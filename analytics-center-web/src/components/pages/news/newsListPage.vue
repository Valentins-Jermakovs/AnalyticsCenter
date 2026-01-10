<template>
  <div class="flex flex-col min-h-0">
    <Header :title="title" :imageUrl="image"></Header>
    <NavigationPanel v-model="activePage" :buttons="navButtons" />

    <!-- List of news (only for read and navigate to details) -->
    <NewsGrid :news="newsList" v-if="activePage === 'list'" />
    <!-- Administration page (for create, update and delete news) -->
    <NewsAdminPage v-if="activePage === 'admin'" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useNewsStore } from '@/stores/news'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import NewsGrid from '@/components/news/NewsGrid.vue'
import Header from '@/components/ui/Header.vue'
import NavigationPanel from '@/components/ui/NavigationPanel.vue'
import NewsAdminPage from './newsAdminPage.vue'

const title = computed(() => t('system.news.title'))
import newsImage from '@/assets/images/priscilla-du-preez-DZcHCzUhtMo-unsplash.jpg'
const image = newsImage
const store = useNewsStore()
const newsList = computed(() => store.filteredNews)

const navButtons = computed(() => [
  { title: t('system.news.list'), key: 'list' },
  { title: t('system.news.admin'), key: 'admin' },
])

const activePage = ref('list')
</script>
