<template>
  <select :value="modelValue" @change="updateValue" class="select select-bordered w-full">
    <option v-for="(item, index) in items" :key="index" :value="item.value">
      {{ item.title }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: Number,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (e) => {
  emit('update:modelValue', Number(e.target.value))
}
</script>

<style scoped></style>
