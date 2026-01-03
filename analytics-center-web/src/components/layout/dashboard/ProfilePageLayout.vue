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

    <!-- История активности / таблица -->
    <UserActivityTable :columns="activityColumns" :rows="activityRows" />
  </div>
</template>

<script setup>
import ProfileHeader from '@/components/profile/ProfileHeader.vue'
import UserInfoCard from '@/components/profile/UserInfoCard.vue'
import UserProgressCard from '@/components/profile/UserProgressCard.vue'
import UserActionsCard from '@/components/profile/UserActionsCard.vue'
import UserActivityTable from '@/components/profile/UserActivityTable.vue'

const user = {
  name: 'Валентин Ермаков',
  email: 'valentin@example.com',
  avatar: 'src/assets/avatar.jpg',
  role: 'Пользователь',
  joined: '2025-06-20',
}

// Прогресс пользователя
const progressItems = [
  {
    title: 'Завершено задач',
    value: 78,
    max: 100,
    percent: 78,
    colorClass: 'text-success',
    progressClass: 'progress-success',
  },
  {
    title: 'Цели месяца',
    value: 3,
    max: 5,
    percent: 60,
    colorClass: 'text-primary',
    progressClass: 'progress-primary',
  },
  {
    title: 'Активность недели',
    value: 5,
    max: 7,
    percent: 71,
    colorClass: 'text-warning',
    progressClass: 'progress-warning',
  },
]

// Действия пользователя
const actions = [
  { title: 'Редактировать профиль', icon: 'edit', handler: () => console.log('Edit profile') },
  { title: 'Сменить пароль', icon: 'lock', handler: () => console.log('Change password') },
  { title: 'Выйти', icon: 'logout', handler: () => console.log('Logout') },
]

// Таблица активности
const activityColumns = ['Дата', 'Действие', 'Статус']
const activityRows = [
  { Дата: '01/01/2026', Действие: 'Загрузка файла', Статус: 'Успешно' },
  { Дата: '02/01/2026', Действие: 'Завершение задачи', Статус: 'Выполнено' },
  { Дата: '03/01/2026', Действие: 'Просмотр отчета', Статус: 'Прочитано' },
]
</script>

<style scoped></style>
