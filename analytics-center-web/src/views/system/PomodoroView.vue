<template>
    <Header :title="title" :imageUrl="image"></Header>
    <NavigationPanel v-model="activePage" :buttons="navButtons" />
    <Pomodoro v-if="activePage === 'timer'"></Pomodoro>
    <PomodoroSettings v-if="activePage === 'settings'"
    @switch-to-timer="activePage = 'timer'" >
    </PomodoroSettings>
</template>

<script setup>
import Pomodoro from '@/components/pomodoro/Pomodoro.vue';
import PomodoroSettings from '@/components/pomodoro/PomodoroSettings.vue';
import Header from '@/components/ui/Header.vue';
import NavigationPanel from '@/components/ui/NavigationPanel.vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import {ref, computed} from 'vue'

const title = computed(() => t('system.pomodoro.title'))
import pomodoroImage from '@/assets/images/age-barros-rBPOfVqROzY-unsplash.jpg'
const image = pomodoroImage

const activePage = ref('timer')

const navButtons = computed(() => [
  { title: t('system.pomodoro.title'), key: 'timer' },
  { title: t('system.pomodoro.settings'), key: 'settings' },
])

import { useTimerLogic } from '@/composables/usePomodoro'
</script>

<style scoped></style>
