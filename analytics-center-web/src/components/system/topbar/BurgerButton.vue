<template>
  <!-- burger -->
  <button
    class="w-12 h-12 border-0 btn"
    @click="toggleSideBar"
    :class="isSideBarOpen ? 'bg-base-100 hover:bg-base-300' : 'btn-primary'"
  >
    <font-awesome-icon icon="bars" />
  </button>
</template>

<script setup>
import { useSideBar } from '@/composables/useSideBar'
const { toggleSideBar, isSideBarOpen } = useSideBar()
</script>

<style scoped></style>
