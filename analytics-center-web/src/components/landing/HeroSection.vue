<template>
  <section class="h-screen flex flex-col justify-center items-center bg-[url('/src/assets/images/joshua-reddekopp-3Oq-AZHQdU0-unsplash.jpg')]">
    <h1 class="text-5xl font-bold mb-4">
        {{ $t('landing.hero_title') }}
    </h1>
    <p class="text-xl mb-8 text-center max-w-xl">
        {{ $t('landing.hero_subtitle') }}
    </p>
    <div class="flex gap-4">
      <RouterLink to="/">
        <button class="btn btn-primary btn-lg">{{ $t('landing.login') }}</button>
      </RouterLink>
      <RouterLink to="/">
        <button class="btn btn-outline btn-lg">{{ $t('landing.register') }}</button>
      </RouterLink>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
