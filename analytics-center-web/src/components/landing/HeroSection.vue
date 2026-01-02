<template>
  <section class="h-screen flex flex-col justify-center items-center bg-[url('/src/assets/images/joshua-reddekopp-3Oq-AZHQdU0-unsplash.jpg')]">
    <h1 class="text-5xl font-bold mb-4">Analytics Center</h1>
    <p class="text-xl mb-8 text-center max-w-xl">Personal Productivity Analytics Platform</p>
    <div class="flex gap-4">
      <RouterLink to="/">
        <button class="btn btn-primary btn-lg">Login</button>
      </RouterLink>
      <RouterLink to="/">
        <button class="btn btn-outline btn-lg">Register</button>
      </RouterLink>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
