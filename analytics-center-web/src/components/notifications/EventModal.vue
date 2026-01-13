<template>
  <dialog class="modal" :open="open">
    <div class="modal-box w-full max-w-md md:max-w-lg">
      <h3 class="font-bold text-lg">Jauns notikums</h3>
      <form method="dialog" class="flex flex-col gap-5 mt-5">
        <div class="form-control w-full flex flex-col gap-5">
          <label class="label"><span class="label-text">Notikuma nosaukums:</span></label>
          <input type="text" placeholder="Ievadi notikuma nosaukumu" class="input input-bordered w-full" v-model="event.title"/>
        </div>
        <div class="form-control w-full flex flex-col gap-5">
          <label class="label"><span class="label-text">Notikuma apraksts:</span></label>
          <textarea class="textarea textarea-bordered w-full" placeholder="Ievadi notikuma aprakstu" v-model="event.description"></textarea>
        </div>
        <div class="form-control w-full flex gap-5">
          <label class="label"><span class="label-text">Pēc cik minūtēm atgādināt:</span></label>
          <NumberSelection :items="workOptions" v-model="event.time"/>
        </div>
      </form>
      <div class="modal-action">
        <button class="btn btn-primary" @click="$emit('add-event')">Izveidot</button>
        <button class="btn btn-neutral" @click="$emit('close')">Atcelt</button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import NumberSelection from '@/components/ui/NumberSelection.vue'
defineProps({
  open: Boolean,
  event: Object,
  workOptions: Array
})
defineEmits(['add-event','close'])
</script>

<style scoped></style>