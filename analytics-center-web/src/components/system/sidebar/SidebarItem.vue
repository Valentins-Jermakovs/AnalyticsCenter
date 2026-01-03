<template>
  <router-link
    :to="{ name: toName }"
    class="h-12 font-bold md:w-12 md:h-12 md:tooltip md:tooltip-right flex items-center justify-center transform transition-all duration-500"
    :data-tip="t(titleKey)"
    :class="[
      isActive ? 'bg-primary' : 'bg-base-100 hover:bg-secondary',
      isSideBarOpen ? 'opacity-100 left-0' : 'opacity-0 pointer-events-none -left-15',
    ]"
    @click="handleClick"
  >
    <font-awesome-icon :icon="icon" />
    <h2 class="inline md:hidden font-bold ml-2">{{ t(titleKey) }}</h2>
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useSideBar } from '@/composables/useSideBar'
import { computed } from 'vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { isSideBarOpen, toggleSideBar } = useSideBar()

const props = defineProps({
  titleKey: {
    type: String,
    required: true,
  },
  icon: String,
  toName: String,
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
