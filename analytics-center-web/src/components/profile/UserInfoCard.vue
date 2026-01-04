<template>
  <div class="bg-base-200 border border-base-300 rounded-box p-5 flex flex-col gap-2">
    <h3 class="text-lg font-semibold">{{ $t('system.dashboard.profile.user.contact_info') }}</h3>
    <p>
      <strong>{{ $t('system.dashboard.profile.user.email') }}:</strong> {{ user.email }}
    </p>
    <p>
      <strong>{{ $t('system.dashboard.profile.user.role') }}:</strong> {{ user.role }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  user: Object,
})
</script>

<style scoped></style>
