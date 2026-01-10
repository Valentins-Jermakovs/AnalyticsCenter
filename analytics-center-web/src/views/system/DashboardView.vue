<template>
  <Header :title="title" :imageUrl="image"></Header>
  <NavigationPanel v-model="activePage" :buttons="navButtons" />
  <DashboardHome v-if="activePage === 'home'" />
  <AnalyticsLayot v-if="activePage === 'analytics'" />
  <ProfilePage v-if="activePage === 'profile'" />
</template>

<script setup>
import AnalyticsLayot from '@/components/layout/dashboard/AnalyticsLayot.vue'
import DashboardHome from '@/components/layout/dashboard/DashboardHomeLayout.vue'
import ProfilePage from '@/components/layout/dashboard/ProfilePageLayout.vue'
import Header from '@/components/ui/Header.vue'
import NavigationPanel from '@/components/ui/NavigationPanel.vue'

import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const navButtons = computed(() => [
  { title: t('system.dashboard.home.title'), key: 'home' },
  { title: t('system.dashboard.analytics.title'), key: 'analytics' },
  { title: t('system.dashboard.profile.title'), key: 'profile' },
])

const title = computed(() => t('system.sidebar.dashboard'))
import newsImage from '@/assets/images/milad-fakurian-G5fdwRVoi4Q-unsplash.jpg'
const image = newsImage

const activePage = ref('home')
</script>

<style scoped></style>
