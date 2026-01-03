<template>
  <AuthLayout>
    <AuthHeader></AuthHeader>
    <LoginForm></LoginForm>
    <AuthFooter></AuthFooter>
  </AuthLayout>
</template>

<script setup>
import AuthHeader from '@/components/auth/AuthHeader.vue'
import LoginForm from '@/components/auth/LoginForm.vue'
import AuthLayout from '@/components/layout/AuthLayout.vue'
import AuthFooter from '@/components/auth/AuthFooter.vue'
</script>

<style scoped></style>
