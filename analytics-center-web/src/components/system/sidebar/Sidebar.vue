<template>
  <div
    class="h-full bg-base-200 border-base-300 flex transform transition-all duration-500"
    :class="isSideBarOpen ? 'w-full md:w-16 border-r' : 'w-0 border-0'"
  >
    <!-- Menu -->
    <ul class="menu menu-compact w-full overflow-visible">
      <SidebarItem
        v-for="(item, index) in menu"
        :key="index"
        :titleKey="item.titleKey"
        :icon="item.icon"
        :toName="item.routeName"
      >
      </SidebarItem>
    </ul>
  </div>
</template>

<script setup>
import { useSideBar } from '@/composables/useSideBar'
import SidebarItem from './SidebarItem.vue'

const { isSideBarOpen } = useSideBar()

const menu = [
  {
    titleKey: 'system.sidebar.dashboard',
    icon: 'fa-solid fa-cube',
    routeName: 'dashboard',
  },
  {
    titleKey: 'system.sidebar.news',
    icon: 'fa-solid fa-newspaper',
    routeName: 'news',
  },
  {
    titleKey: 'system.sidebar.calendar',
    icon: 'fa-solid fa-calendar',
    routeName: 'calendar',
  },
  {
    titleKey: 'system.sidebar.work',
    icon: 'fa-solid fa-check-to-slot',
    routeName: 'work',
  },
  {
    titleKey: 'system.sidebar.notifications',
    icon: 'fa-solid fa-bell',
    routeName: 'notifications',
  },
  {
    titleKey: 'system.sidebar.pomodoro',
    icon: 'fa-solid fa-clock',
    routeName: 'pomodoro',
  },
  {
    titleKey: 'system.sidebar.data_analyzer',
    icon: 'fa-solid fa-chart-pie',
    routeName: 'dataAnalyzer',
  },
]
</script>
