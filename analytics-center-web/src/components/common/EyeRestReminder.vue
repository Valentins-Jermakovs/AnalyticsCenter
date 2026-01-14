<template>
  <!-- Eye Rest Reminder -->
  <transition name="fade">
    <div v-if="show" class="fixed bottom-5 right-5 z-50">
      <div class="p-5 alert bg-base-100 shadow-lg rounded-box w-80 flex flex-col gap-2 border border-base-300">
        <h3 class="font-semibold text-lg flex items-center gap-2">Acu atpūta</h3>

        <p class="my-5">
          Paskaties prom no ekrāna uz 20 sekundēm.
        </p>

        <div class="flex justify-end gap-2">
          <button class="btn btn-neutral" @click="later">
            Vēlāk
          </button>
          <button class="btn btn-primary" @click="close">
            Labi
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const show = ref(true)
let timer = null

const remind = (time) => {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    show.value = true
  }, time)
}

const close = () => {
  show.value = false
  remind(20 * 60 * 1000) // 20 min
}

const later = () => {
  show.value = false
  remind(5 * 60 * 1000) // 5 min
}

onMounted(() => {
  remind(20 * 60 * 1000)
})

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
