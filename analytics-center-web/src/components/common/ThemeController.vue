<template>
  <label class="flex items-center gap-2 cursor-pointer">
    <!-- Toggle -->
    <font-awesome-icon icon="fa-solid fa-sun" />
    <input type="checkbox" class="toggle" :checked="isDark" @change="toggleTheme" />
    <font-awesome-icon icon="fa-solid fa-moon" />
  </label>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const applyTheme = (dark) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  isDark.value = dark
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    applyTheme(true)
  } else if (saved === 'light') {
    applyTheme(false)
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark)
  }
})

const toggleTheme = (event) => {
  applyTheme(event.target.checked)
}
</script>

<style scoped></style>
