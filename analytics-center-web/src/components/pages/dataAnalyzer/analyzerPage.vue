<template>
    <Header :title="title" :imageUrl="image"></Header>
    <NavigationPanel v-model="activePage" :buttons="navButtons" />
    <ManualPage v-if="activePage === 'manual'"></ManualPage>
    <UploadPage v-if="activePage === 'upload'"></UploadPage>
</template>

<script setup>
import Header from '@/components/ui/Header.vue';
import NavigationPanel from '@/components/ui/NavigationPanel.vue';

const title = 'Datu analizators';
import newsImage from '@/assets/images/shubham-dhage-MNCVkZxae6A-unsplash.jpg'
import ManualPage from './manualPage.vue';
import UploadPage from './uploadPage.vue';
const image = newsImage

import { ref, computed } from 'vue'
const activePage = ref('manual')
const navButtons = computed(() => [
  { title: 'Manuāla datu ievade', key: 'manual' },
  { title: 'Datu augsupielāde', key: 'upload' },
])
</script>

<style scoped></style>