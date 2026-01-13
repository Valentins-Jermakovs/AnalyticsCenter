<template>
  <dialog class="modal" :open="open">
    <div class="modal-box w-full max-w-md md:max-w-lg">
      <h3 class="font-bold text-lg">Notikuma nosaukums</h3>
      <p class="py-4">{{ event.title }}</p>
      <h3 class="font-bold text-lg">Notikuma apraksts</h3>
      <p class="py-4">{{ event.description }}</p>
      <div class="modal-action">
        <button class="btn" @click="$emit('close')">Ok</button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
defineProps({
  open: Boolean,
  event: Object
})
defineEmits(['close'])
</script>

<style scoped></style>