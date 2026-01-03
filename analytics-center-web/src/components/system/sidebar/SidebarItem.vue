<template>
  <li>
    <RouterLink :to="{ name: toName }" class="btn btn-square tooltip tooltip-right"
    :data-tip="title"
    :class="isActive ? 'btn-primary' : 'btn-neutral'">
      <font-awesome-icon :icon="icon" />
    </RouterLink>
  </li>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  toName: { type: String, required: true },
})

const currentRoute = useRoute()

const isActive = computed(() => currentRoute.name === props.toName)
</script>

<style scoped></style>
