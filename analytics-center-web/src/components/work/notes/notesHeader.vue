<template>
  <div class="w-full flex flex-col gap-4 px-4 md:flex-row md:items-center md:gap-6">

    <!-- LEFT: title -->
    <div class="flex items-center gap-3 shrink-0">
      <font-awesome-icon icon="fa-solid fa-file-lines" class="text-xl md:text-2xl opacity-80" />
      <h1 class="text-xl md:text-2xl font-bold">
        {{ t('system.work.notes_page.header_title') }}
      </h1>
    </div>

    <!-- SPACER (desktop only) -->
    <div class="hidden md:flex flex-1"></div>

    <!-- RIGHT: search + actions -->
    <div class="flex flex-col gap-3 w-full sm:flex-row sm:items-center sm:gap-4 md:w-auto">

      <!-- search -->
      <div class="flex items-center gap-2 w-full sm:w-auto">
        <input type="text" :placeholder="t('common.search')" class="input input-bordered w-full sm:w-64" />
        <button class="btn btn-square btn-secondary shrink-0">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>

      <!-- add note -->
      <button class="btn btn-primary btn-square self-end sm:self-auto" @click="$emit('new-note')">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>

    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>
