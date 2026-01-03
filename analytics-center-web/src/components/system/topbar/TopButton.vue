<template>
  <button
    class="w-12 h-12 border-0 btn bg-base-100 hover:bg-secondary tooltip tooltip-bottom"
    :data-tip="t(titleKey)"
    @click="emit('click')"
  >
    <font-awesome-icon :icon="icon" />
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  titleKey: { type: String, required: true },
  icon: { type: String, required: true },
})

const emit = defineEmits(['click'])
</script>

<style scoped></style>
