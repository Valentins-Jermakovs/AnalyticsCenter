<template>
  <div class="flex flex-col gap-5 p-5">
    <!-- Header / карточка пользователя -->
    <ProfileHeader :user="user" />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <!-- Личная информация -->
      <UserInfoCard :user="user" />

      <!-- Прогресс и достижения -->
      <div class="flex flex-col gap-5">
        <UserProgressCard v-for="(item, index) in progressItems" :key="index" v-bind="item" />
      </div>

      <!-- Настройки / действия -->
      <UserActionsCard :actions="actions" />
    </div>
  </div>
</template>

<script setup>
import ProfileHeader from '@/components/profile/ProfileHeader.vue'
import UserInfoCard from '@/components/profile/UserInfoCard.vue'
import UserProgressCard from '@/components/profile/UserProgressCard.vue'
import UserActionsCard from '@/components/profile/UserActionsCard.vue'

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const user = computed(() => ({
  name: 'Valentīns Jermakovs',
  email: 'jermakovsvalentin@gmail.com',
  role: t('system.dashboard.profile.user.roles.admin'),
  joined: '2025-06-20',
}))

// Прогресс пользователя
const progressItems = computed(() => [
  {
    title: t('system.dashboard.profile.kpi.tasks'),
    value: 78,
    max: 100,
    percent: 78,
    colorClass: 'text-success',
    progressClass: 'progress-success',
  },
  {
    title: t('system.dashboard.profile.kpi.month_tasks'),
    value: 3,
    max: 5,
    percent: 60,
    colorClass: 'text-primary',
    progressClass: 'progress-primary',
  },
  {
    title: t('system.dashboard.profile.kpi.week_activity'),
    value: 5,
    max: 7,
    percent: 71,
    colorClass: 'text-warning',
    progressClass: 'progress-warning',
  },
])

// Действия пользователя
const actions = computed(() => [
  {
    title: t('system.dashboard.profile.user.actions.edit_profile'),
    icon: 'edit',
    handler: () => console.log('Edit profile'),
  },
  {
    title: t('system.dashboard.profile.user.actions.change_password'),
    icon: 'lock',
    handler: () => console.log('Change password'),
  },
  {
    title: t('system.dashboard.profile.user.actions.exit'),
    icon: 'logout',
    handler: () => console.log('Logout'),
  },
])
</script>

<style scoped></style>
