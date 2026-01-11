<template>
    <div class="md:p-5 flex items-center justify-center h-full">

        <div class="bg-base-200 w-full lg:w-4/5 h-full flex flex-col gap-5 overflow-auto">
            <!-- title -->
            <div class="flex items-center justify-center p-5 bg-base-300">
                <h1 class="text-3xl"> Virsraksts </h1>

            </div>
            <!-- Графики -->
            <div v-if="charts.length" class="w-full h-96 px-5">
                <LineChart v-for="(chart, index) in charts" :key="index" :title="chart.title" :labels="chart.labels"
                    :series="chart.series" class="border border-base-300" />
            </div>

            <!-- Если графиков нет -->
            <div v-else class="flex px-5 w-full items-center justify-center">
                <div
                    class="w-full flex flex-col items-center justify-center h-96 px-3 border border-base-300 rounded-box bg-base-100">
                    <h2 class="text-2xl opacity-50 mb-2">Nav datu!</h2>
                    <font-awesome-icon icon="fa-solid fa-chart-line" size="2xl" class="opacity-50" />
                    <p class="opacity-50 mt-2">Izveidojiet grafiku, izmantojot sadaļu Datu Analizators!</p>
                </div>
            </div>

            <!-- Анализ показателей по каждому dataset -->
            <div v-if="charts.length" class="flex flex-col gap-6 px-5">
                <template v-for="(chart, chartIndex) in charts" :key="chartIndex">
                    <!-- Заголовок графика -->

                    <!-- Для каждого dataset отдельная строка -->
                    <template v-for="(dataset, dsIndex) in chart.series" :key="dsIndex">
                        <div class="w-full flex items-center justify-center p-3 bg-base-100 border border-base-300">
                            <h3 class="text-lg font-semibold">{{ dataset.label }}</h3>
                        </div>
                        <div class="flex gap-4 mb-2">
                            <!-- Min -->
                            <div class="flex-1 border border-base-300 bg-base-100 p-4 rounded-box flex flex-col items-center justify-center">
                                <p class="text-sm opacity-50 mb-1">Min</p>
                                <p class="text-2xl font-bold">{{ getMin(dataset.data) }}</p>
                            </div>
                            <!-- Avg -->
                            <div class="flex-1 border border-base-300 bg-base-100 p-4 rounded-box flex flex-col items-center justify-center">
                                <p class="text-sm opacity-50 mb-1">Avg</p>
                                <p class="text-2xl font-bold">{{ getAvg(dataset.data) }}</p>
                            </div>
                            <!-- Max -->
                            <div class="flex-1 border border-base-300 bg-base-100 p-4 rounded-box flex flex-col items-center justify-center">
                                <p class="text-sm opacity-50 mb-1">Max</p>
                                <p class="text-2xl font-bold">{{ getMax(dataset.data) }}</p>
                            </div>
                        </div>
                    </template>
                </template>
            </div>

            <!-- description block -->
            <div class="px-5">
                <p class="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat molestiae iure culpa ad quas
                    natus quibusdam,
                    ut, ab quia, velit officiis magnam repudiandae nemo aspernatur. Nesciunt mollitia aliquid officia
                    ipsam?
                    Itaque, inventore sed dicta ipsa veniam natus voluptates pariatur quos! Quis sunt quibusdam quaerat
                    consequuntur
                    eaque dolorum quod adipisci odio eligendi. Architecto voluptatem iusto, magni beatae amet dolorem
                    tempora
                    necessitatibus?
                    Nihil assumenda sed quia nisi! Placeat amet laudantium dignissimos totam facilis, nam veritatis odio
                    esse nobis
                    eos aspernatur iusto ipsa distinctio minus tempore consectetur libero soluta nulla qui impedit
                    mollitia.
                    Laudantium, ipsum eaque libero voluptatibus minima unde asperiores sequi quis commodi rerum
                    quisquam, officiis
                    est ipsa natus voluptate saepe suscipit distinctio! Nisi ducimus animi rerum ab culpa consequatur
                    repellat aut!
                    Ad totam natus at nostrum odio vero consequuntur harum quibusdam ratione. Illo fugit vero cumque
                    eveniet
                    inventore expedita totam deleniti dignissimos ipsa a dicta autem, accusantium molestiae. Sint, culpa
                    delectus.
                    Quasi consectetur pariatur autem quibusdam, quos aperiam harum iure assumenda nam laudantium ipsam
                    quidem vitae
                    molestias voluptatem. Ad voluptas cumque aspernatur quo molestias, quibusdam explicabo, debitis
                    placeat saepe
                    voluptate rem!
                </p>
            </div>

            <!-- Верхняя панель с кнопками -->
            <div class="flex p-5">
                <div class="w-full flex justify-between items-center">
                    <button @click="goBack" class="btn btn-secondary">
                        ← Atpakaļ
                    </button>
                    <button class="btn btn-primary">
                        Saglabāt
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { computed, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useChartsStore } from '@/stores/chartsData'
import LineChart from '@/components/charts/LineChart.vue'

// router для перехода назад
const router = useRouter()
const goBack = () => router.back()

// store
const chartsStore = useChartsStore()
const charts = computed(() => chartsStore.charts)

// очищаем store при размонтировании страницы
onUnmounted(() => {
    chartsStore.clearCharts()
})

const getMin = (arr) => (arr && arr.length ? Math.min(...arr) : '-')
const getMax = (arr) => (arr && arr.length ? Math.max(...arr) : '-')
const getAvg = (arr) => {
    if (!arr || !arr.length) return '-'
    const sum = arr.reduce((a, b) => a + b, 0)
    return (sum / arr.length).toFixed(2)
}
</script>

<style scoped>
/* можно добавить небольшой отступ между графиками */
.LineChart+.LineChart {
    margin-top: 2rem;
}
</style>
