<template>
  <div class="flex flex-col gap-5 p-5">
    <div class="flex gap-3 items-center">
      <NewsSearch />
      <button class="w-1/12 btn btn-primary" @click="handleCreate">
        {{ $t('common.create') }}
      </button>
    </div>

    <!-- Table of news -->
    <div class="w-full overflow-x-auto">
      <DataTable :columns="columns" :rows="newsRows" @edit="handleEdit" @delete="confirmDelete" />
    </div>

    <!-- Delete Modal -->
    <BaseDialog
      v-model="deleteModal"
      :title="t('system.news.delete_title')"
      :confirm-text="t('common.delete')"
      :cancel-text="t('common.cancel')"
      @confirm="handleDelete"
    >
      <p>
        {{ t('system.news.delete_confirm') }}
        "<strong>{{ selectedNews?.title }}</strong
        >"?
      </p>
    </BaseDialog>

    <!-- Edit / Create Modal -->
    <BaseDialog
      v-model="editModal"
      :title="dialogTitle"
      :confirm-text="confirmText"
      :cancel-text="t('common.cancel')"
      @confirm="saveNews"
      @cancel="closeCreateModal"
    >
      <div class="flex flex-col gap-2">
        <p v-if="creationError" class="text-error text-sm">
          {{ creationError }}
        </p>
        <input
          v-model="editNews.title"
          :placeholder="t('common.title')"
          class="input input-bordered w-full"
        />
        <textarea
          v-model="editNews.description"
          :placeholder="t('common.description')"
          class="textarea textarea-bordered w-full"
        ></textarea>
        <textarea
          v-model="editNews.content"
          :placeholder="t('common.content')"
          class="textarea textarea-bordered w-full"
        ></textarea>
        <input
          v-model="editNews.image"
          :placeholder="t('common.image_URL')"
          class="input input-bordered w-full"
        />
      </div>
    </BaseDialog>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useNewsStore } from '@/stores/news'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import NewsSearch from '@/components/news/NewsSearch.vue'
import DataTable from '@/components/ui/DataTable.vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'

const store = useNewsStore()

const columns = computed(() => [
  { key: 'createdAt', label: t('columns.created_at') },
  { key: 'title', label: t('columns.title') },
  { key: 'description', label: t('columns.description') },
])

const newsRows = computed(() =>
  store.filteredNews.map((n) => ({
    id: n.id,
    createdAt: n.createdAt,
    title: n.title,
    description: n.description,
    content: n.content,
    image: n.image,
  })),
)

// Delete modal
const deleteModal = ref(false)
const selectedNews = ref(null)
const confirmDelete = (row) => {
  selectedNews.value = row
  deleteModal.value = true
}
const handleDelete = () => {
  if (selectedNews.value) {
    store.removeNews(selectedNews.value.id)
    selectedNews.value = null
  }
  deleteModal.value = false
}

// Edit / Create modal
const isEdit = computed(() => !!editNews.value.id)

const dialogTitle = computed(() =>
  isEdit.value ? t('system.news.edit_title') : t('system.news.create_title'),
)

const confirmText = computed(() => (isEdit.value ? t('common.save') : t('common.create')))

const editModal = ref(false)
const editNews = ref({
  id: '',
  title: '',
  description: '',
  content: '',
  image: '',
})

const handleEdit = (row) => {
  editNews.value = { ...row }
  editModal.value = true
}

const handleCreate = () => {
  editNews.value = {
    id: '',
    title: '',
    description: '',
    content: '',
    image: '',
    createdAt: new Date().toISOString().split('T')[0],
  }
  editModal.value = true
}

const creationError = ref('')
const saveNews = () => {
  creationError.value = ''

  // EDIT
  if (editNews.value.id) {
    const index = store.news.findIndex((n) => n.id === editNews.value.id)
    // if fields are empty
    if (
      !editNews.value.title ||
      !editNews.value.description ||
      !editNews.value.content ||
      !editNews.value.image
    ) {
      creationError.value = t('system.news.empty_fields')
      return
    }
    if (index !== -1) {
      store.news[index] = { ...editNews.value }
      editModal.value = false
    }
    return
  }

  // CREATE
  if (
    !editNews.value.title ||
    !editNews.value.description ||
    !editNews.value.content ||
    !editNews.value.image
  ) {
    creationError.value = t('system.news.empty_fields')
    return
  }

  editNews.value.id = crypto.randomUUID()
  store.addNews({ ...editNews.value })
  editModal.value = false
}

const closeCreateModal = () => {
  creationError.value = ''
  editModal.value = false
}
</script>
