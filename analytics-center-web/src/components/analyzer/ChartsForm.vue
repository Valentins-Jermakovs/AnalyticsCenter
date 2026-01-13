<template>
  <!-- charts form -->
  <div class="w-full flex justify-center lg:py-6 lg:px-3">
    <div class="w-full lg:w-2/3">
      <!-- Header -->
      <div class="bg-base-300 w-full text-center p-4 rounded-t-box">
        <h2 class="text-xl sm:text-2xl md:text-3xl">{{ t('system.data_analyzer.form.form_title') }}</h2>
      </div>

      <!-- Form -->
      <form
        class="w-full bg-base-200 p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        @submit.prevent
      >
        <!-- Virsraksts -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">{{ t('system.data_analyzer.form.title') }}</span>
          </label>
          <input
            type="text"
            :placeholder="t('system.data_analyzer.form.placeholder.title')"
            class="input input-bordered w-full"
            v-model="userChart.title"
          />
        </div>

        <!-- Diagrammas tips -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">{{ t('system.data_analyzer.form.type')  }}</span>
          </label>
          <select class="select select-bordered w-full" v-model="userChart.type">
            <option value="line">{{ t('system.data_analyzer.charts.linear') }}</option>
            <option value="bar">{{ t('system.data_analyzer.charts.bar') }}</option>
            <option value="barh">{{ t('system.data_analyzer.charts.barh') }}</option>
            <option value="pie">{{ t('system.data_analyzer.charts.pie') }}</option>
            <option value="doughnut">{{ t('system.data_analyzer.charts.doughnut') }}</option>
            <option value="radar">{{ t('system.data_analyzer.charts.radar') }}</option>
          </select>
        </div>

        <!-- Apraksts -->
        <div class="form-control md:col-span-2">
          <label class="label">
            <span class="label-text">{{ t('system.data_analyzer.form.description') }}</span>
          </label>
          <textarea
            class="textarea textarea-bordered min-h-28 w-full"
            :placeholder="t('system.data_analyzer.form.placeholder.description')"
            v-model="userChart.description"
          ></textarea>
        </div>

        <!-- Diagrammas virsraksts -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">{{ t('system.data_analyzer.form.chart_title') }}</span>
          </label>
          <input
            type="text"
            :placeholder="t('system.data_analyzer.form.placeholder.chart_title')"
            class="input input-bordered w-full"
            v-model="userChart.chartTitle"
          />
        </div>

        <!-- X ass -->
        <div class="form-control">
          <label class="label">
            <span class="label-text">{{ t('system.data_analyzer.form.x_axis') }}</span>
          </label>
          <input
            type="text"
            :placeholder="t('system.data_analyzer.form.placeholder.x_axis')"
            class="input input-bordered w-full"
            v-model="userChart.xAxis"
          />
        </div>

        <!-- Grafiku skaits -->
        <div
          class="form-control md:col-span-2 sm:max-w-xs"
          v-if="userChart.type !== 'pie' && userChart.type !== 'doughnut'"
        >
          <label class="label">
            <span class="label-text">{{ t('system.data_analyzer.form.number_of_charts') }}</span>
          </label>
          <input
            type="number"
            class="input input-bordered w-full"
            v-model="numberOfCharts"
            min="1"
            max="10"
          />
        </div>

        <!-- Y ass -->
        <div class="md:col-span-2 mt-4">
          <h3 class="text-lg font-semibold">{{ t('system.data_analyzer.form.y_axis') }}</h3>
        </div>

        <!-- Datu sērijas -->
        <div
          v-for="index in numberOfCharts"
          :key="index"
          class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-base-300 rounded-box"
        >
          <!-- Series label -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">{{ index }} {{ t('system.data_analyzer.form.y_axis_label') }}</span>
            </label>
            <input
              type="text"
              :placeholder="t('system.data_analyzer.form.placeholder.y_axis_label')"
              class="input input-bordered w-full"
              v-model="userChart.seriesLabels[index - 1]"
            />
          </div>

          <!-- Series data -->
          <div class="form-control">
            <label class="label">
              <span class="label-text">{{ index }} {{ t('system.data_analyzer.form.y_axis_data') }}</span>
            </label>
            <input
              type="text"
              placeholder="1, 2, 3, 4, 5"
              class="input input-bordered w-full"
              v-model="userChart.seriesData[index - 1]"
            />
          </div>
        </div>

        <!-- Submit -->
        <div class="md:col-span-2">
          <button class="btn btn-primary w-full sm:w-auto sm:px-10" @click="submitChartForm">
            {{ t('common.create') }}
          </button>
        </div>
      </form>
    </div>

    <!-- Error Modal -->
    <BaseDialog
      v-model="errorModal"
      :title="t('common.error')"
      :confirm-text="t('common.confirm')"
      @confirm="clearError"
    >
      {{ errorMessage }}
    </BaseDialog>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import BaseDialog from '../ui/BaseDialog.vue'
import { useChartStore } from '@/stores/chartData'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const router = useRouter()
const chartStore = useChartStore()
// ============= Error handling ==========
const errorModal = ref(false)
const errorMessage = ref('')

const clearError = () => {
  errorMessage.value = ''
  errorModal.value = false
}

// Chek for empty fields
const checkEmptyFields = () => {
  // Check text input and textarea
  if (!userChart.title || !userChart.chartTitle || !userChart.description || !userChart.xAxis) {
    errorModal.value = true
    errorMessage.value = t('system.data_analyzer.errors.empty_fields')
    return false
  }
  // Check series labels and data
  if (
    userChart.seriesLabels.some((label) => label.trim() === '') ||
    userChart.seriesData.some((data) => data.trim() === '')
  ) {
    errorModal.value = true
    errorMessage.value = t('system.data_analyzer.errors.empty_fields')
    return false
  }

  return true
}

// check X ass for containing only numbers, letters and spaces and comma
const checkXAxis = () => {
  // only letters, spaces and commas
  const regex = /^[A-Za-zĀĒĪŪŠŽČāēīūšžčА-Яа-яЁё ,]+$/

  if (!regex.test(userChart.xAxis)) {
    errorMessage.value = t('system.data_analyzer.errors.invalid_x_axis')
    errorModal.value = true
    return false
  }

  return true
}
// check Y axis for containing only numbers, points and spaces and comma
const checkAllYSeries = () => {
  let expectedLength = null

  for (let i = 0; i < userChart.seriesData.length; i++) {
    const yValue = userChart.seriesData[i]

    // split by comma
    const numbers = yValue.split(',').map((v) => v.trim())

    // check each number individually
    if (numbers.some((v) => v === '' || isNaN(Number(v)))) {
      errorMessage.value = `${i + 1} ` + t('system.data_analyzer.errors.invalid_y_axis')
      errorModal.value = true
      return false
    }

    // check for equal length
    if (expectedLength === null) {
      expectedLength = numbers.length
    } else if (numbers.length !== expectedLength) {
      errorMessage.value = t('system.data_analyzer.errors.invalid_y_axis_series')
      errorModal.value = true
      return false
    }
  }

  return true
}
const checkXAxisLengthMatchesY = () => {
  // X values
  const xValues = userChart.xAxis
    .split(',')
    .map(v => v.trim())
    .filter(v => v !== '')

  const xLength = xValues.length

  for (let i = 0; i < userChart.seriesData.length; i++) {
    const yValues = userChart.seriesData[i]
      .split(',')
      .map(v => v.trim())
      .filter(v => v !== '')

    if (yValues.length !== xLength) {
      errorMessage.value = t('system.data_analyzer.errors.invalid_x_y_length')
      errorModal.value = true
      return false
    }
  }

  return true
}
// validate chart form
const validateChartForm = () => {
  if (!checkEmptyFields()) return false
  if (!checkXAxis()) return false
  if (!checkAllYSeries()) return false
  if (!checkXAxisLengthMatchesY()) return false
  return true
}
// submit function
const submitChartForm = () => {
  if (validateChartForm()) {
    chartStore.addChart(userChart)
    router.push({ name: 'visualization' })
  }
}
// ============= Charts data =============
// User chart object
const userChart = reactive({
  title: '',
  chartTitle: '',
  description: '',
  type: 'line',
  xAxis: '',
  seriesLabels: [''],
  seriesData: [''],
})
const numberOfCharts = ref(1) // user selected number of charts

// synhronize number of charts and series labels and data
watch(numberOfCharts, (newValue) => {
  // Labels
  while (userChart.seriesLabels.length < newValue) userChart.seriesLabels.push('')
  while (userChart.seriesLabels.length > newValue) userChart.seriesLabels.pop()

  // Data
  while (userChart.seriesData.length < newValue) userChart.seriesData.push('')
  while (userChart.seriesData.length > newValue) userChart.seriesData.pop()
})

// if user select [pie, douhgnut] chart type, set number of charts to 1
watch(
  () => userChart.type,
  (newType) => {
    if (newType === 'pie' || newType === 'doughnut') {
      numberOfCharts.value = 1
    }
  },
)
</script>

<style scoped></style>
