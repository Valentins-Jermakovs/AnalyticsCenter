<template>
    <Header :title="title" :imageUrl="image"></Header>
    <NavigationPanel v-model="activePage" :buttons="navButtons" />
    <NotesPage v-if="activePage === 'notes'"></NotesPage>
    <KanbanPage v-if="activePage === 'kanban'"></KanbanPage>
    <ProjectPage v-if="activePage === 'projects'"></ProjectPage>
</template>

<script setup>
import Header from '@/components/ui/Header.vue'
import NavigationPanel from '@/components/ui/NavigationPanel.vue'
// Translation
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
// Imports
import { ref, computed } from 'vue'

const title = computed(() => t('system.work.title'))
import workImage from '@/assets/images/luca-bravo-6jSBqYqLxNg-unsplash.jpg'
import NotesPage from '@/components/pages/work/notesPage.vue'
import KanbanPage from '@/components/pages/work/kanbanPage.vue'
import ProjectPage from '@/components/pages/work/projectPage.vue'
const image = workImage

// Active page
const activePage = ref('notes')

const navButtons = computed(() => [
  { title: t('system.work.notes'), key: 'notes' },
  { title: t('system.work.kanban'), key: 'kanban' },
  { title: t('system.work.projects'), key: 'projects' },
])
</script>

<style scoped></style>