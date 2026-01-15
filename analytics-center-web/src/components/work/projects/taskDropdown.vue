<template>
  <!-- Dropdown -->
  <div class="dropdown dropdown-left">
    <span
      tabindex="0"
      class="cursor-pointer select-none px-2 text-lg leading-none hover:bg-base-200 rounded"
      aria-label="Task actions"
    >
      ⋮
    </span>

    <ul
      tabindex="0"
      class="dropdown-content menu bg-base-100 border border-base-300 rounded-box shadow w-40"
    >
      <li>
        <a @click="editOpen = true">Редактировать</a>
      </li>
      <li>
        <a class="text-error" @click="removeOpen = true">Удалить</a>
      </li>
    </ul>
  </div>

  <!-- Edit task dialog -->
  <BaseDialog
    v-model="editOpen"
    title="Edit task"
    :confirm-text="'Save'"
    :cancel-text="'Cancel'"
  >
    <div class="flex flex-col gap-4 w-full">

      <!-- Task title -->
      <div class="flex flex-col gap-1">
        <label class="label">
          <span class="label-text">Task title</span>
        </label>
        <input
          type="text"
          class="input input-bordered w-full"
        />
      </div>

      <!-- Dates -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="flex flex-col gap-1">
          <label class="label">
            <span class="label-text">Start date</span>
          </label>
          <input
            type="date"
            class="input input-bordered w-full"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="label">
            <span class="label-text">End date</span>
          </label>
          <input
            type="date"
            class="input input-bordered w-full"
          />
        </div>
      </div>

      <!-- Selects -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="flex flex-col gap-1">
          <label class="label">
            <span class="label-text">Priority</span>
          </label>
          <select class="select select-bordered w-full">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <div class="flex flex-col gap-1">
          <label class="label">
            <span class="label-text">Status</span>
          </label>
          <select class="select select-bordered w-full">
            <option>Pending</option>
            <option>In progress</option>
            <option>Done</option>
          </select>
        </div>
      </div>

    </div>
  </BaseDialog>

  <!-- Remove task dialog -->
  <BaseDialog
    v-model="removeOpen"
    title="Remove task"
    :confirm-text="'Remove'"
    :cancel-text="'Cancel'"
  >
    <p class="text-sm">
      Are you sure you want to remove this task?
    </p>
  </BaseDialog>
</template>

<script setup>
import { ref } from 'vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'

const editOpen = ref(false)
const removeOpen = ref(false)
</script>
