<template>
  <Header :title="title" :imageUrl="image"></Header>
  <NavigationPanel v-model="activePage" :buttons="navButtons" />
  <ManualPage v-if="activePage === 'manual'"></ManualPage>
</template>

<script setup>
import Header from '@/components/ui/Header.vue'
import NavigationPanel from '@/components/ui/NavigationPanel.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const title = computed(() => t('system.data_analyzer.title'))
import newsImage from '@/assets/images/shubham-dhage-MNCVkZxae6A-unsplash.jpg'
import ManualPage from './manualPage.vue'
const image = newsImage

import { ref, computed } from 'vue'
const activePage = ref('manual')
const navButtons = computed(() => [{ title: t('system.data_analyzer.subtitle'), key: 'manual' }])
</script>

<style scoped></style>
