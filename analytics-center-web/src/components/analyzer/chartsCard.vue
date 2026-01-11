<template>
  <div
    class="
      group
      bg-base-200 border border-base-300
      p-6
      min-h-[140px] sm:min-h-[160px]
      flex items-start justify-between gap-6
      transition-all duration-200
      hover:shadow-md
      hover:-translate-y-0.5
      cursor-pointer
    "
  >
    <!-- LEFT: text -->
    <div class="flex flex-col gap-2">
      <h3 class="text-base font-semibold tracking-tight">
        {{ title }}
      </h3>

      <p class="text-sm text-base-content/70 leading-snug">
        {{ description }}
      </p>
    </div>

    <!-- RIGHT: icon -->
    <div
      class="
        shrink-0
        w-14 h-14
        bg-gray-50
        border border-base-300
        flex items-center justify-center
      "
    >
      <img
        :src="icon"
        class="w-7 h-7 opacity-80"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
})
</script>

<style scoped></style>
