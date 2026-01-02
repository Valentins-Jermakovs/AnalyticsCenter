<template>
  <section class="py-16 bg-base-200">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold mb-4">{{ $t('landing.about_title') }}</h2>
        <p class="mb-4">
          {{ $t('landing.about_content') }}
        </p>
      </div>
      <div class="md:w-1/2">
        <img src="@/assets/images/aron-yigin-x1HnjrnppKQ-unsplash.jpg" alt="About" class="rounded-lg shadow-lg" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
