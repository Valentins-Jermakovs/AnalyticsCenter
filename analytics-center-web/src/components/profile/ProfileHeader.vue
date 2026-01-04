<template>
  <div class="flex items-center gap-5 p-5 bg-base-200 border border-base-300 rounded-box">
    <font-awesome-icon icon="user-circle" class="text-6xl" />
    <div class="flex flex-col gap-1">
      <h2 class="text-2xl font-semibold">{{ user.name }}</h2>
      <p class="text-base-content/70">{{ user.role }}</p>
      <p class="text-sm text-base-content/50">{{ $t('system.dashboard.profile.user.registration_time') }}: {{ user.joined }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  user: Object,
})
</script>

<style scoped></style>
