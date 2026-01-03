<template>
  <router-link
    :to="{ name: toName }"
    class="h-12 md:w-12 md:h-12 md:tooltip md:tooltip-right flex items-center justify-center transform transition-all duration-500"
    :data-tip="title"
    :class="[
      isActive ? 'bg-primary' : 'bg-neutral hover:bg-secondary',
      isSideBarOpen ? 'opacity-100 left-0' : 'opacity-0 pointer-events-none -left-15',
    ]"
    @click="handleClick"
  >
    <font-awesome-icon :icon="icon" />
    <span class="inline md:hidden ml-2">{{ title }}</span>
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSideBar } from '@/composables/useSideBar'
import { computed } from 'vue'

const { isSideBarOpen, toggleSideBar } = useSideBar()

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  toName: { type: String, required: true },
})

const currentRoute = useRoute()

const isActive = computed(() => currentRoute.name === props.toName)

const handleClick = () => {
  if (window.innerWidth < 768) {
    toggleSideBar()
  }
}
</script>

<style scoped></style>
