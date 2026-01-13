<template>
  <Header :title="title" :imageUrl="image"></Header>
  <div class="flex flex-col gap-5 p-5 h-full">
    <!-- Event window -->
    <div class="grid grid-cols-2 gap-5 bg-base-100 rounded-box border border-base-300 p-5">
      <!-- Left side -->
      <div class="flex flex-col rounded-field border border-base-300 bg-base-200">
        <div class="w-full p-5 items-center justify-center">
          <h1 class="text-2xl" v-if="events.length">{{ events[0].title }}</h1>
          <h1 class="text-2xl" v-else>Nav notikumu</h1>
        </div>
        <div class="w-full p-5">
          <p v-if="events.length">
            {{ events[0].description }}
          </p>
          <p v-else>Nav apraksta</p>
        </div>
      </div>
      <!-- Right side -->
      <div class="flex flex-col gap-3">
        <div class="flex bg-base-200 rounded-field p-5 items-center justify-center">
          <h1 class="text-4xl">{{ formattedTime }}</h1>
        </div>
        <!-- Control media buttons -->
        <div class="flex justify-around gap-3">
          <button
            class="btn btn-neutral flex-1"
            @click="launchTimer"
            :disabled="events.length === 0"
          >
            <font-awesome-icon icon="fa-solid fa-play" />
          </button>
          <button
            class="btn btn-neutral flex-1"
            @click="pauseTimer"
            :disabled="events.length === 0"
          >
            <font-awesome-icon icon="fa-solid fa-pause" />
          </button>
          <button
            class="btn btn-error flex-1"
            @click="launchDeleteEvents(0)"
            :disabled="events.length === 0"
          >
            <font-awesome-icon icon="fa-solid fa-trash" />
          </button>
        </div>
        <!-- Action buttons -->
        <div class="flex justify-center items-center gap-3">
          <button class="btn btn-primary flex-1" @click="newEventModal">Jauns notikums</button>
        </div>
      </div>
    </div>

    <!-- Event creation modal -->
    <dialog class="modal" :open="newModal">
      <div class="modal-box bg-base-200">
        <h3 class="font-bold text-lg">Jauns notikums</h3>
        <form method="dialog" class="flex flex-col gap-5 mt-5">
          <div class="form-control w-full flex gap-5">
            <label class="label">
              <span class="label-text">Notikuma nosaukums: </span>
            </label>
            <input
              type="text"
              placeholder="Ievadi notikuma nosaukumu"
              class="input input-bordered bg-base-200"
              v-model="newEvent.title"
            />
          </div>
          <div class="form-control w-full flex gap-5">
            <label class="label">
              <span class="label-text">Notikuma apraksts: </span>
            </label>
            <textarea
              class="textarea textarea-bordered bg-base-200"
              placeholder="Ievadi notikuma aprakstu"
              v-model="newEvent.description"
            ></textarea>
          </div>
          <div class="form-control w-full flex gap-5">
            <label class="label">
              <span class="label-text">Pēc cik minūtēm atgādināt: </span>
            </label>
            <NumberSelection :items="workOptions" v-model="newEvent.time"></NumberSelection>
          </div>
        </form>
        <div class="modal-action">
          <button class="btn btn-primary" @click="addEvent">Izveidot</button>
          <button class="btn btn-neutral" @click="newEventModal">Atcelt</button>
        </div>
      </div>
    </dialog>

    <!-- List of events -->
    <div class="flex flex-col gap-3">
      <div
        class="flex bg-base-100 border border-base-300 p-5 items-center justify-center rounded-box"
      >
        <h1 class="text-2xl">Notikumi</h1>
      </div>
    </div>
    <!-- Table of events -->
    <div class="flex flex-1 overflow-auto bg-base-100 border border-base-300 rounded-box p-10">
      <!-- Window if items == 0 -->
      <div
        class="w-full h-full rounded-field bg-base-200 flex flex-col gap-5 items-center justify-center cursor-pointer"
        @click="newEventModal"
        v-if="events.length === 0"
      >
        <!--  Text and icon -->
        <h1 class="text-4xl opacity-30">Nav notikumu</h1>
        <font-awesome-icon icon="fa-solid fa-square-plus" size="2xl" class="opacity-40" />
      </div>
      <table
        class="table bg-base-200 border border-base-300 rounded-field"
        v-if="events.length > 0"
      >
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
          <tr v-for="(event, index) in events" :key="index">
            <td>{{ event.title }}</td>
            <td>{{ event.description }}</td>
            <td>{{ event.timeString }}</td>
            <td>
              <div class="flex gap-3 items-center">
                <div class="inline-grid *:[grid-area:1/1]">
                  <div
                    class="status animate-ping"
                    :class="event.status ? 'status-success' : 'status-warning'"
                  ></div>
                  <div
                    class="status"
                    :class="event.status ? 'status-success' : 'status-warning'"
                  ></div>
                </div>
                <div>
                  <p v-if="event.status === true" class="inline">Aktīvs</p>
                  <p v-else class="inline">Ieplānots</p>
                </div>
              </div>
            </td>
            <td>
              <div class="flex flex-col gap-3">
                <button class="btn btn-neutral btn-xs" @click="readEvent(index)">Lasīt</button>
                <button class="btn btn-error btn-xs" @click="launchDeleteEvents(index)">
                  Izdzēst
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Read modal -->
    <dialog class="modal" :open="readModal">
      <div class="modal-box bg-base-200">
        <h3 class="font-bold text-lg">Notikuma nosaukums</h3>
        <p class="py-4">
          {{ currentEvent.title }}
        </p>
        <h3 class="font-bold text-lg">Notikuma apraksts</h3>
        <p class="py-4">
          {{ currentEvent.description }}
        </p>
        <div class="modal-action">
          <button class="btn" @click="readEventModal">Ok</button>
        </div>
      </div>
    </dialog>

    <!-- Delete modal -->
    <dialog class="modal" :open="deleteModal">
      <div class="modal-box flex flex-col gap-3 bg-base-200">
        <h3 class="text-lg font-bold">Tiešām dzēst?</h3>

        <div class="modal-action">
          <button class="btn btn-error" @click="deleteSelectedEvents">Dzēst</button>
          <button class="btn btn-ghost" @click="abortDelete">Atcelt</button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import Header from '@/components/ui/Header.vue'
import NumberSelection from '@/components/ui/NumberSelection.vue'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const title = computed(() => t('system.notifications.title'))
import notificationImage from '@/assets/images/igor-omilaev-GCakG_Kr0UM-unsplash.jpg'
const image = notificationImage

import { useEventPlanner } from '@/composables/useEventPlanner'

// composable
const {
  events,
  newEvent,
  newModal,
  deleteModal,
  addEvent,
  deleteSelectedEvent,
  isActiveEvent,
  newEventModal,
  deleteEventModal,
  formattedTime,
  launchTimer,
  pauseTimer,
  deleteSelectedEvents,
  launchDeleteEvents,
  abortDelete,
  readEvent,
  readModal,
  readEventModal,
  currentEvent,
  NotificationWindow,
  openNotificationWindow,
  closeNotificationWindow,
  playSound,
} = useEventPlanner()

// work options
const workOptions = [
  { title: '1 min', value: 1 },
  { title: '5 min', value: 5 },
  { title: '10 min', value: 10 },
  { title: '20 min', value: 20 },
  { title: '30 min', value: 30 },
  { title: '40 min', value: 40 },
  { title: '50 min', value: 50 },
  { title: '60 min', value: 60 },
]
</script>

<style scoped></style>
