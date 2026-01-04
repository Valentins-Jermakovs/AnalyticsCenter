<template>
  <div class="bg-base-200 border border-base-300 rounded-box p-5 flex flex-col gap-3">
    <h3 class="text-lg font-semibold mb-2">
      {{ $t('system.dashboard.profile.user.actions.title') }}
    </h3>
    <button
      v-for="(action, index) in actions"
      :key="index"
      @click="action.handler"
      class="btn btn-neutral w-full justify-start"
    >
      {{ action.title }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  actions: Array,
})
</script>

<style scoped></style>
