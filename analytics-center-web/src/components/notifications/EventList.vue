<template>
  <div class="flex flex-col gap-3">

    <div class="flex flex-1 overflow-auto bg-base-100 border border-base-300 rounded-box p-5">
      <div
        class="w-full h-full rounded-field bg-base-200 p-5 flex flex-col gap-5 items-center justify-center cursor-pointer"
        v-if="!events.length"
        @click="$emit('new-event')"
      >
        <h1 class="text-4xl opacity-30">Nav notikumu</h1>
        <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl" class="opacity-40"/>
      </div>

      <table class="table bg-base-200 border border-base-300 rounded-field w-full" v-else>
        <thead>
          <tr>
            <th>Nosaukums</th>
            <th>Apraksts</th>
            <th>Laiks</th>
            <th>Statuss</th>
            <th class="text-center">Operācijas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event,index) in events" :key="index">
            <td>{{ event.title }}</td>
            <td>{{ event.description }}</td>
            <td>{{ event.timeString }}</td>
            <td>
              <div class="flex gap-3 items-center">
                <div class="inline-grid *:[grid-area:1/1]">
                  <div class="status animate-ping" :class="event.status ? 'status-success':'status-warning'"></div>
                  <div class="status" :class="event.status ? 'status-success':'status-warning'"></div>
                </div>
                <div>
                  <p>{{ event.status ? 'Aktīvs':'Ieplānots' }}</p>
                </div>
              </div>
            </td>
            <td class="flex flex-col gap-2 justify-center">
              <button class="btn btn-neutral btn-sm" @click="$emit('read-event',index)">Lasīt</button>
              <button class="btn btn-error btn-sm" @click="$emit('delete-event',index)">Izdzēst</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  events: Array
})
defineEmits(['read-event','delete-event','new-event'])
</script>
