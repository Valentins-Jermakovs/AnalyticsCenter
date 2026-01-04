<template>
  <div class="flex bg-base-200 border-y border-base-300 text-xl pl-20">
    <button
      v-for="(item, index) in buttons"
      :key="index"
      @click="setActive(item.key)"
      :class="[
        'w-40 h-16 border-t-4 text-nowrap',
        activeKey === item.key
          ? 'border-primary bg-neutral text-neutral-content'
          : 'border-transparent bg-base-200 hover:bg-base-300 hover:cursor-pointer',
      ]"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'

const props = defineProps({
  buttons: {
    type: Array,
    required: true,
    // Sample: [{ title: 'Home', key: 'home' }, { title: 'Analytics', key: 'analytics' }]
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['update:modelValue'])

const activeKey = ref(props.modelValue || (props.buttons.length ? props.buttons[0].key : ''))

const setActive = (key) => {
  activeKey.value = key
  emits('update:modelValue', key)
}

// Watch modelValue
watch(
  () => props.modelValue,
  (val) => {
    if (val) activeKey.value = val
  },
)
</script>

<style scoped></style>
