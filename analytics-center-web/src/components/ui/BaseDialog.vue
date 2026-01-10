<template>
  <dialog class="modal" :open="modelValue">
    <div class="modal-box flex flex-col gap-3">
      <!-- Title -->
      <h3 v-if="title" class="text-lg font-bold">
        {{ title }}
      </h3>
      <!-- Content -->
      <div class="modal-content">
        <slot></slot>
      </div>
      <!-- Actions -->
      <div class="modal-action">
        <slot name="actions">
          <!-- default buttons -->
          <button v-if="confirmText" class="btn btn-primary" @click="confirm">
            {{ confirmText }}
          </button>
          <button v-if="cancelText" class="btn btn-neutral" @click="close">
            {{ cancelText }}
          </button>
        </slot>
      </div>
    </div>
  </dialog>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
  confirmText: {
    type: String,
    default: '',
  },
  cancelText: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'confirm'])

const close = () => {
  emit('update:modelValue', false)
  emit('cancel')
}

const confirm = () => {
  emit('confirm')
}
</script>

<style scoped></style>
