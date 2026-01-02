<template>
  <section class="py-16 bg-base-200">
    <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-1/2">
        <img
          src="@/assets/images/aron-yigin-x1HnjrnppKQ-unsplash.jpg"
          alt="About"
          class="md:rounded-box"
        />
      </div>
      <div class="md:w-1/2 p-5 lg:p-0">
        <h2 class="text-3xl font-bold mb-4">{{ $t('landing.about_title') }}</h2>
        <p class="mb-4">
          {{ $t('landing.about_content') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
