<template>
  <!-- Login and registration header -->
  <!-- if login -->
  <div v-if="isLogin" class="mb-4 mt-5">
    <h1 class="text-2xl">{{ $t('auth.login_title') }}</h1>
  </div>
  <!-- if registration -->
  <div v-if="isRegister" class="mb-4 mt-5">
    <h1 class="text-2xl">{{ $t('auth.register_title') }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isLogin = computed(() => route.name === 'login')
const isRegister = computed(() => route.name === 'register')
</script>

<style scoped></style>
