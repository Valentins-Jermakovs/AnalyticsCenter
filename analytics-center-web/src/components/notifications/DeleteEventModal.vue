<template>
  <dialog class="modal" :open="open">
    <div class="modal-box flex flex-col gap-3 w-full max-w-md md:max-w-lg">
      <h3 class="text-lg font-bold">Tiešām dzēst?</h3>
      <div class="modal-action">
        <button class="btn btn-error" @click="$emit('delete')">Dzēst</button>
        <button class="btn btn-ghost" @click="$emit('close')">Atcelt</button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
defineProps({open:Boolean})
defineEmits(['delete','close'])
</script>

<style scoped></style>