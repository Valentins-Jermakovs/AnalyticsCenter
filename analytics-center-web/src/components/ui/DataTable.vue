<template>
  <div class="w-full overflow-x-auto border border-base-300 rounded-box bg-base-200 p-4">
    <table class="table w-full">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">
            {{ col.label }}
          </th>
          <th>{{ $t?.('system.dashboard.home.table.columns.actions') }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="col in columns" :key="col.key">
            {{ formatCell(row[col.key], col.key) }}
          </td>

          <td class="flex gap-2">
            <button class="btn btn-sm btn-primary" @click="$emit('edit', row)">
              {{ $t?.('common.edit') }}
            </button>
            <button class="btn btn-sm btn-error" @click="$emit('delete', row)">
              {{ $t?.('common.delete') }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: { type: Array, required: true }, // [{ key, label }]
    rows: { type: Array, required: true },
    actionsLabel: {
      type: String,
      default: 'Actions',
    },
  },
  methods: {
    formatCell(value, key) {
      if (key === 'status') {
        return this.$t?.(`system.dashboard.home.table.rows.status.${value}`) ?? value
      }
      return value
    },
  },
}
</script>

<style scoped></style>
