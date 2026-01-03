<template>
  <nav class="w-full border-b border-base-300 px-4 py-2 flex items-center justify-between">
    <!-- LEFT: burger + logo -->
    <div class="flex items-center gap-4">
      <!-- logo -->
      <h1 class="text-xl sm:text-2xl font-bold">AC [0.1]</h1>
    </div>

    <!-- RIGHT: buttons -->
    <div class="flex items-center gap-2">
      <!-- search -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom" data-tip="Search">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </button>
      <!-- language -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom" data-tip="Language">
        <font-awesome-icon icon="fa-solid fa-globe" />
      </button>

      <!-- support -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom" data-tip="Support">
        <font-awesome-icon icon="fa-solid fa-question-circle" />
      </button>

      <!-- user profile -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom" data-tip="Settings">
        <font-awesome-icon icon="fa-solid fa-gear" />
      </button>

      <!-- logout -->
      <button class="btn btn-neutral btn-square tooltip tooltip-bottom" data-tip="Logout">
        <font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" />
      </button>
    </div>
  </nav>
</template>

<script setup>

</script>

<style scoped></style>
