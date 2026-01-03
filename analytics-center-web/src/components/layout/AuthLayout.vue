<template>
  <div class="flex h-full">
    <!-- Form section -->
    <div class="flex flex-col w-full md:w-2/3 lg:w-1/5 p-5">
      <slot></slot>
    </div>
    <!-- Image section -->
    <div
      class="hidden md:block flex-1 bg-[url('/src/assets/images/jan-habarta-11Ayjq5VO-Y-unsplash.jpg')] bg-cover bg-center"
    ></div>
  </div>
</template>

<script setup></script>

<style scoped></style>
