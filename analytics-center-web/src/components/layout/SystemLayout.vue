<template>
  <div class="flex flex-col h-full">
    <div class="w-full">
      <TopBar></TopBar>
    </div>
    <div class="flex-1 flex h-0">
      <Sidebar></Sidebar>
      <!-- Scrollable child pages -->
      <div class="flex-1 bg-base-100 overflow-auto">
        <NotificationsWindow></NotificationsWindow>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import NotificationsWindow from '../common/NotificationsWindow.vue'
import Sidebar from '../system/sidebar/Sidebar.vue'
import TopBar from '../system/TopBar.vue'
</script>

<style scoped></style>
