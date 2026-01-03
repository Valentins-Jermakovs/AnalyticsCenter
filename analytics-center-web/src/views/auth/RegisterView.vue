<template>
  <AuthLayout>
    <AuthHeader></AuthHeader>
    <RegisterForm></RegisterForm>
    <AuthFooter></AuthFooter>
  </AuthLayout>
</template>

<script setup>
import AuthHeader from '@/components/auth/AuthHeader.vue'
import AuthLayout from '@/components/layout/AuthLayout.vue'
import AuthFooter from '@/components/auth/AuthFooter.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
</script>

<style scoped></style>
