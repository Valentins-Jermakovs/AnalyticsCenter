<template>
  <Header title="Pārlūks"></Header>
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

import { ref } from 'vue'

const navButtons = [
  { title: 'Home', key: 'home' },
  { title: 'Analytics', key: 'analytics' },
  { title: 'Profile', key: 'profile' },
]

const activePage = ref('home')
</script>

<style scoped></style>
