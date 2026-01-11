<template>
  <ChartCard
    title="Lineārais grafiks"
    description="Attēlo datu grafiku līnijās"
    :icon="lineChart"
    @click="lineModalOpen = true"
  />

  <BaseDialog
    v-model="lineModalOpen"
    title="Lineārais grafiks"
    confirmText="Saglabāt"
    cancelText="Atcelt"
    @confirm="submitLine"
    @cancel="resetForm"
  >
    <div class="flex flex-col gap-3">
      <label>
        Nosaukums:
        <input v-model="lineTitle" type="text" class="input input-bordered w-full" />
      </label>

      <label>
        Paraksti (atdalīt ar komatu):
        <input v-model="lineLabels" type="text" class="input input-bordered w-full" />
      </label>

      <label>
        Dataset vērtības (komatu atdalītas; vairākus dataset atdalīt ar ';'):
        <input v-model="lineData" type="text" class="input input-bordered w-full" />
      </label>

      <label>
        Dataset nosaukumi (komatu atdalīti):
        <input v-model="lineDatasetNames" type="text" class="input input-bordered w-full" />
      </label>

      <div v-if="errors.length" class="text-red-600">
        <div v-for="(err, i) in errors" :key="i">{{ err }}</div>
      </div>
    </div>
  </BaseDialog>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useChartsStore } from '@/stores/chartsData'
import ChartCard from '@/components/analyzer/chartsCard.vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'
import lineChart from '@/assets/icons/chart--multi-line.svg'

const router = useRouter()

const lineModalOpen = ref(false)
const lineTitle = ref('')
const lineLabels = ref('')
const lineData = ref('')
const lineDatasetNames = ref('')
const errors = ref([])

// получаем глобальный store
const chartsStore = useChartsStore()

function submitLine() {
  errors.value = []

  const labels = lineLabels.value.split(',').map(l => l.trim()).filter(Boolean)
  if (!labels.length) errors.value.push('Ievadiet vismaz vienu parakstu.')

  const datasetsRaw = lineData.value.split(';').map(ds => ds.trim()).filter(Boolean)
  if (!datasetsRaw.length) errors.value.push('Ievadiet vismaz vienu dataset.')

  const names = lineDatasetNames.value.split(',').map(n => n.trim())
  if (names.length && names.length !== datasetsRaw.length)
    errors.value.push('Dataset nosaukumu skaits nesakrīt ar dataset vērtībām.')

  if (errors.value.length) return

  const series = datasetsRaw.map((dsStr, i) => ({
    label: names[i] || `Dataset ${i + 1}`,
    data: dsStr.split(',').map(v => Number(v.trim()))
  }))

  const chart = {
    title: lineTitle.value.trim(),
    labels,
    series
  }

  // сохраняем график в глобальный Pinia store
  chartsStore.addChart(chart)

  // закрываем модалку и очищаем форму
  lineModalOpen.value = false
  resetForm()

  // Переадресация на страницу визуализации
  router.push({ name: 'visualization' })
}

function resetForm() {
  lineTitle.value = ''
  lineLabels.value = ''
  lineData.value = ''
  lineDatasetNames.value = ''
  errors.value = []
}
</script>

<style scoped></style>