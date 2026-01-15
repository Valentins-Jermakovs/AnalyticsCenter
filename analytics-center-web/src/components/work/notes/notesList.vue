<template>
  <div class="p-5 w-full flex flex-col gap-5">

    <!-- header -->
    <notes-header @new-note="openCreate" />

    <div class="w-full bg-base-200 border border-base-300 p-5 flex flex-col gap-4">
      <!-- notes list -->
      <div class="bg-base-100 rounded-box p-4 border border-base-300
        flex flex-col gap-3 flex-1 overflow-auto">
        <note-item v-for="item in notes" :key="item.id" :note="item" @edit="openEdit" @delete="openDelete" />
      </div>

    </div>

    <!-- CREATE -->
    <BaseDialog v-model="noteModalOpen" :title="t('system.work.notes_page.modal_title')">
      <NotesForm @submit="createNote" @cancel="noteModalOpen = false" />
    </BaseDialog>

    <!-- EDIT -->
    <BaseDialog v-model="editModalOpen" :title="t('system.work.notes_page.note_edit_title')">
      <NotesForm :initial-data="activeNote" @submit="updateNote" @cancel="closeEdit" />
    </BaseDialog>

    <!-- DELETE -->
    <BaseDialog v-model="deleteModalOpen" title="Dzēst piezīmi?" confirmText="Dzēst" cancelText="Atcelt"
      @confirm="confirmDelete">
      <p class="text-sm opacity-80">
        Vai tiešām vēlies dzēst šo piezīmi?
      </p>
    </BaseDialog>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import NotesHeader from './notesHeader.vue'
import NoteItem from './noteItem.vue'
import NotesForm from './notesForm.vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'

/* ------------------ STATE ------------------ */

const notes = ref([
  { id: 1, title: 'Ideja', content: 'Izveidot filtrāciju' },
  { id: 2, title: 'TODO', content: 'Pievienot projektam' },
  { id: 3, title: 'Bug', content: 'Labot layout' },
])

const activeNote = ref(null)

const noteModalOpen = ref(false)
const editModalOpen = ref(false)
const deleteModalOpen = ref(false)

/* ------------------ CREATE ------------------ */

const openCreate = () => {
  noteModalOpen.value = true
}

const createNote = (data) => {
  notes.value.push({
    id: Date.now(), // temporary id for demo
    ...data,
  })

  noteModalOpen.value = false
}

/* ------------------ EDIT ------------------ */

const openEdit = (note) => {
  activeNote.value = { ...note } // copy
  editModalOpen.value = true
}

const updateNote = (data) => {
  const index = notes.value.findIndex(n => n.id === activeNote.value.id)

  if (index !== -1) {
    notes.value[index] = {
      ...notes.value[index],
      ...data,
    }
  }

  closeEdit()
}

const closeEdit = () => {
  editModalOpen.value = false
  activeNote.value = null
}

/* ------------------ DELETE ------------------ */

const openDelete = (id) => {
  activeNote.value = notes.value.find(n => n.id === id)
  deleteModalOpen.value = true
}

const confirmDelete = () => {
  notes.value = notes.value.filter(n => n.id !== activeNote.value.id)

  deleteModalOpen.value = false
  activeNote.value = null
}
</script>

<style scoped></style>
