<template>
  <div class="flex items-center pl-2 pr-4 py-2 border-b border-base-300 justify-between">
    <!-- LEFT: burger + logo -->
    <div class="flex items-center gap-4">
      <burger-button></burger-button>
      <!-- logo -->
      <logo></logo>
    </div>
    <!-- RIGHT: buttons -->
    <div class="flex">
      <top-button
        v-for="(item, index) in navigation"
        :key="index"
        :title="item.title"
        :icon="item.icon"
      ></top-button>
    </div>
  </div>
</template>

<script setup>
import BurgerButton from './topbar/BurgerButton.vue'
import Logo from './topbar/Logo.vue'
import TopButton from './topbar/TopButton.vue'

const navigation = [
  { title: 'Search', icon: 'fa-solid fa-magnifying-glass' },
  { title: 'Language', icon: 'fa-solid fa-globe' },
  { title: 'Support', icon: 'fa-solid fa-question-circle' },
  { title: 'Settings', icon: 'fa-solid fa-gear' },
  { title: 'Logout', icon: 'fa-solid fa-right-from-bracket' },
]
</script>

<style scoped></style>
