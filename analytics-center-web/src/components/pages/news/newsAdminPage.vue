<template>
  <div class="flex flex-col gap-5 p-5">
    <div class="flex gap-3 items-center">
      <NewsSearch />
      <button class="w-1/12 btn btn-primary" @click="handleCreate">Create</button>
    </div>

    <!-- Table of news -->
    <div class="w-full overflow-x-auto">
      <DataTable :columns="columns" :rows="newsRows" @edit="handleEdit" @delete="confirmDelete" />
    </div>

    <!-- Delete Modal -->
    <BaseDialog
      v-model="deleteModal"
      :title="'Delete this news?'"
      :confirm-text="'Delete'"
      :cancel-text="'Cancel'"
      @confirm="handleDelete"
    >
      <p>
        Are you sure you want to delete "<strong>{{ selectedNews?.title }}</strong
        >"?
      </p>
    </BaseDialog>

    <!-- Edit / Create Modal -->
    <BaseDialog
      v-model="editModal"
      :title="editNews.id ? 'Edit News' : 'Create News'"
      :confirm-text="editNews.id ? 'Save' : 'Create'"
      :cancel-text="'Cancel'"
      @confirm="saveNews"
    >
      <div class="flex flex-col gap-2">
        <input v-model="editNews.title" placeholder="Title" class="input input-bordered w-full" />
        <textarea
          v-model="editNews.description"
          placeholder="Description"
          class="textarea textarea-bordered w-full"
        ></textarea>
        <textarea
          v-model="editNews.content"
          placeholder="Content"
          class="textarea textarea-bordered w-full"
        ></textarea>
        <input
          v-model="editNews.image"
          placeholder="Image URL"
          class="input input-bordered w-full"
        />
      </div>
    </BaseDialog>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useNewsStore } from '@/stores/news'
import NewsSearch from '@/components/news/NewsSearch.vue'
import DataTable from '@/components/ui/DataTable.vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'

const store = useNewsStore()

const columns = computed(() => [
  { key: 'createdAt', label: 'Date' },
  { key: 'title', label: 'Title' },
  { key: 'description', label: 'Description' },
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

const saveNews = () => {
  if (editNews.value.id) {
    // Edit existing news
    const index = store.news.findIndex((n) => n.id === editNews.value.id)
    if (index !== -1) {
      store.news[index] = { ...editNews.value }
    }
  } else {
    // Create new news
    editNews.value.id = crypto.randomUUID()
    store.addNews({ ...editNews.value })
  }
  editModal.value = false
}
</script>
