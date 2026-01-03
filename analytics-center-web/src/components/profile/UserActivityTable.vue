<template>
  <div class="w-full overflow-x-auto border border-base-300 rounded-box bg-base-200 p-4">
    <table class="table w-full">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">{{ col }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="col in columns" :key="col">{{ row[col] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  columns: Array,
  rows: Array,
})
</script>

<style scoped></style>
