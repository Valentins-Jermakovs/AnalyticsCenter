<template>
  <div class="bg-base-100 p-3 flex flex-1">
    <div class="flex flex-1 gap-3">
      <input
        class="input input-bordered bg-base-200 w-full"
        :placeholder="$t('common.search')"
        v-model="store.search"
      />
    </div>
  </div>
</template>

<script setup>
import { useNewsStore } from '@/stores/news'
const store = useNewsStore()
</script>

<style scoped></style>
