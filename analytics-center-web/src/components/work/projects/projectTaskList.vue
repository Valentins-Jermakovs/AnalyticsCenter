<template>
  <div class="w-full p-4 bg-base-200 border border-base-300">

    <!-- ===== DESKTOP / TABLET TABLE ===== -->
    <div class="hidden md:block bg-base-100 border border-base-300">
      <table class="w-full text-sm">
        <thead class="border-b border-base-300 bg-base-100">
          <tr>
            <th class="px-4 py-3 w-12">#</th>
            <th class="px-4 py-3 text-left">Задача</th>
            <th class="px-4 py-3">Начало</th>
            <th class="px-4 py-3">Конец</th>
            <th class="px-4 py-3">Приоритет</th>
            <th class="px-4 py-3">Статус</th>
            <th class="px-4 py-3 w-12">Опции</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="task in tasks"
            :key="task.id"
            class="border-b border-base-300 hover:bg-base-200 transition"
          >
            <td class="px-4 py-3">{{ task.id }}</td>
            <td class="px-4 py-3 font-medium">{{ task.title }}</td>
            <td class="px-4 py-3 text-center">{{ task.start }}</td>
            <td class="px-4 py-3 text-center">{{ task.end }}</td>
            <td class="px-4 py-3 text-center">
              <span :class="priorityClass(task.priority)">
                {{ task.priority }}
              </span>
            </td>
            <td class="px-4 py-3 text-center">
              <span :class="statusClass(task.status)">
                {{ task.status }}
              </span>
            </td>
            <td class="px-4 py-3 text-right">
              <TaskDropdown />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ===== MOBILE CARDS ===== -->
    <div class="md:hidden flex flex-col gap-4">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="bg-base-100 border border-base-300 p-4 rounded"
      >
        <!-- header -->
        <div class="flex justify-between items-start">
          <div class="text-sm opacity-60">#{{ task.id }}</div>
          <TaskDropdown />
        </div>

        <!-- title -->
        <div class="mt-2 font-semibold">
          {{ task.title }}
        </div>

        <!-- meta -->
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <div class="opacity-60">Начало</div>
            <div>{{ task.start }}</div>
          </div>
          <div>
            <div class="opacity-60">Конец</div>
            <div>{{ task.end }}</div>
          </div>
          <div>
            <div class="opacity-60">Приоритет</div>
            <span :class="priorityClass(task.priority)">
              {{ task.priority }}
            </span>
          </div>
          <div>
            <div class="opacity-60">Статус</div>
            <span :class="statusClass(task.status)">
              {{ task.status }}
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import TaskDropdown from './taskDropdown.vue'

const tasks = [
  {
    id: 1,
    title: 'Notestēt funkcionālu',
    start: '2023.01.01',
    end: '2023.01.02',
    priority: 'High',
    status: 'In progress'
  },
  {
    id: 2,
    title: 'Izlabot UI kļūdas',
    start: '2023.01.03',
    end: '2023.01.04',
    priority: 'Medium',
    status: 'Done'
  }
]

const priorityClass = (priority) => {
  return {
    High: 'badge badge-error',
    Medium: 'badge badge-info',
    Low: 'badge badge-ghost'
  }[priority]
}

const statusClass = (status) => {
  return {
    'In progress': 'badge badge-warning',
    Done: 'badge badge-success',
    Pending: 'badge badge-neutral'
  }[status]
}
</script>

<style scoped>
</style>
