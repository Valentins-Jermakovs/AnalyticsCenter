<template>
  <!-- burger -->
  <button class="w-12 h-12 border-0 btn" @click="toggleSideBar"
  :class="isSideBarOpen ? 'btn-neutral' : 'btn-primary'">
    <font-awesome-icon icon="bars" />
  </button>
</template>

<script setup>
import { useSideBar } from '@/composables/useSideBar'
const { toggleSideBar, isSideBarOpen } = useSideBar()
</script>

<style scoped></style>
