<template>
  <!-- 404 Page -->
  <div class="w-full min-h-screen flex flex-col justify-center items-center p-5 lg:p-10">
    <!-- Titles -->
    <div class="flex flex-col gap-2 items-center text-center">
      <h1 class="text-5xl lg:text-6xl font-extrabold">ERROR 404</h1>
      <h2 class="text-2xl lg:text-3xl font-semibold text-base-content">
        {{ t('errors.404') }}
      </h2>
    </div>

    <!-- Image -->
    <div class="my-8 w-full flex justify-center">
      <img
        class="w-full max-w-lg h-auto"
        src="/src/assets/illustrations/undraw_page-eaten_b2rt.svg"
        alt="Page not found"
      />
    </div>

    <!-- Button -->
    <button
      class="btn btn-primary text-lg lg:text-xl px-6 py-3 transition-transform hover:scale-105"
      @click="goBack"
    >
      {{ t('common.back') }}
    </button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped></style>
