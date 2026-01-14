<template>
  <div class="grid grid-cols-7 text-xs sm:text-sm bg-base-100">
    <div
      v-for="(day, index) in days"
      :key="index"
      class="h-16 sm:h-24 border border-base-content/10 p-1 sm:p-2"
      :class="{
        'bg-base-300 font-bold': day && isToday(day)
      }"
    >
      <span v-if="day">{{ day }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  days: Array,
  isToday: Function
})
</script>
