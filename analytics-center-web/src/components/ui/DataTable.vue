<template>
  <div class="w-full overflow-x-auto border border-base-300 rounded-box bg-base-200 p-4">
    <table class="table w-full">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">{{ col }}</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="col in columns" :key="col">{{ row[col] }}</td>
          <td class="flex gap-2">
            <button class="btn btn-sm btn-primary" @click="$emit('edit', row)">Edit</button>
            <button class="btn btn-sm btn-error" @click="$emit('delete', row)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: Array,
    rows: Array,
  },
}
</script>

<style scoped></style>
