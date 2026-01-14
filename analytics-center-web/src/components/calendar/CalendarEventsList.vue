<template>
  <div class="p-3 sm:p-5">
    <div class="w-full bg-base-200 border border-base-300 rounded-box p-3 sm:p-4">

      <!-- Search -->
      <div class="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          class="input input-bordered w-full"
          :placeholder="t('common.search')"
        />
        <button class="btn btn-primary w-full sm:w-auto">
          {{ t('common.search') }}
        </button>
      </div>

      <!-- DESKTOP / TABLET TABLE -->
      <div class="hidden md:block overflow-x-auto">
        <table class="table bg-base-100 border border-base-300">
          <thead>
            <tr>
              <th>#</th>
              <th>{{ t('columns.title') }}</th>
              <th>{{ t('columns.date') }}</th>
              <th>{{ t('columns.time') }}</th>
              <th class="text-right">
                {{ t('columns.actions') }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 3" :key="i">
              <th>{{ i }}</th>
              <td>Konference</td>
              <td>12/12/2025</td>
              <td>10:00–12:00</td>
              <td>
                <div class="flex justify-end gap-2">
                  <button class="btn btn-xs btn-secondary">
                    {{ t('common.read') }}
                  </button>
                  <button class="btn btn-xs btn-primary">
                    {{ t('common.edit') }}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- MOBILE CARDS -->
      <div class="md:hidden flex flex-col gap-3">
        <div
          v-for="i in 3"
          :key="i"
          class="card bg-base-100 border border-base-300"
        >
          <div class="card-body p-3 gap-2">
            <h3 class="font-semibold text-base">
              Konference
            </h3>

            <div class="text-sm text-base-content/70">
              12/12/2025 · 10:00–12:00
            </div>

            <div class="flex gap-2 pt-2">
              <button class="btn btn-sm btn-secondary flex-1">
                {{ t('common.read') }}
              </button>
              <button class="btn btn-sm btn-primary flex-1">
                {{ t('common.edit') }}
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>
