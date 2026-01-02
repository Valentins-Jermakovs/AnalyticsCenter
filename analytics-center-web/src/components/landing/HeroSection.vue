<template>
  <section
    class="h-screen flex flex-col justify-center items-center bg-[url('/src/assets/images/joshua-reddekopp-3Oq-AZHQdU0-unsplash.jpg')] bg-cover bg-center"
  >
    <div class="flex flex-col gap-4 items-center justify-center">
      <h1 class="text-4xl lg:text-5xl font-bold mb-4 text-center text-primary-content">
        {{ $t('landing.hero_title') }}
      </h1>
      <p class="text-lg lg:text-xl mb-8 text-center max-w-xl text-primary-content">
        {{ $t('landing.hero_subtitle') }}
      </p>
      <div class="flex gap-4">
        <RouterLink to="/">
          <button class="btn btn-primary btn-lg">{{ $t('landing.login') }}</button>
        </RouterLink>
        <RouterLink to="/">
          <button class="btn btn-neutral btn-lg">{{ $t('landing.register') }}</button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
