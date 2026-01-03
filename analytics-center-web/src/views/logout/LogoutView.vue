<template>
  <div class="w-full h-full flex flex-col justify-center items-center p-5 lg:p-10">
    <!-- Titles -->
    <div class="flex flex-col gap-2 items-center text-center">
      <h1 class="text-5xl lg:text-6xl font-extrabold text-base-content">
        {{ $t('logout.title') }}
      </h1>
    </div>

    <!-- Image -->
    <div class="my-8 w-full flex justify-center">
      <img
        class="w-full max-w-lg h-auto"
        src="/src/assets/illustrations/undraw_absorbed_h2rt.svg"
        alt="Page not found"
      />
    </div>

    <!-- Button -->
    <button
      class="btn btn-primary text-lg lg:text-xl px-6 py-3 transition-transform hover:scale-105"
      @click="$router.push('/')"
    >
      {{ $t('logout.confirm') }}
    </button>
  </div>
</template>

<script></script>

<style scoped></style>
