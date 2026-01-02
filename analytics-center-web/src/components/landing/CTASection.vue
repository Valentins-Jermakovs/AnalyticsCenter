<template>
  <section class="py-16 bg-base-300 text-center">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-4">{{ $t('CTA.title') }}</h2>
      <p class="mb-8">
        {{ $t('CTA.description') }}
      </p>
      <div class="flex justify-center gap-4">
        <RouterLink to="/">
          <button class="btn btn-primary btn-lg">{{ $t('landing.login') }}</button>
        </RouterLink>
        <RouterLink to="/">
          <button class="btn btn-outline btn-lg">{{ $t('landing.register') }}</button>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
