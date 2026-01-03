<template>

  <RouterLink :to="{ name: toName }" class="btn w-full btn-lg md:btn-md md:btn-square md:tooltip md:tooltip-right
    flex items-center justify-center transform transition-all duration-500" :data-tip="title" :class="[
      isActive ? 'btn-primary' : 'btn-neutral',
      isSideBarOpen ? 'opacity-100 left-0' : 'opacity-0 pointer-events-none -left-15'
    ]">
    <font-awesome-icon :icon="icon" />
    <span class="inline md:hidden ml-2">{{ title }}</span>
  </RouterLink>

</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSideBar } from '@/composables/useSideBar'
import { computed } from 'vue'

const { isSideBarOpen } = useSideBar()

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  toName: { type: String, required: true },
})

const currentRoute = useRoute()

const isActive = computed(() => currentRoute.name === props.toName)
</script>

<style scoped></style>
