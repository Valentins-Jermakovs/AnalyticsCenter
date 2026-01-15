<template>
  <form class="flex flex-col gap-4 w-full" @submit.prevent="submit">

    <!-- Title -->
    <div class="form-control flex flex-col gap-1">
      <label class="label">
        <span class="label-text">
            {{ t('system.work.notes_page.note_title') }}
        </span>
      </label>
      <input
        v-model="form.title"
        type="text"
        :placeholder="t('system.work.notes_page.note_title_placeholder')"
        class="input input-bordered w-full"
        required
      />
    </div>

    <!-- Content -->
    <div class="form-control flex-1 flex flex-col gap-1">
      <label class="label">
        <span class="label-text">
            {{ t('system.work.notes_page.note_description') }}
        </span>
      </label>
      <textarea
        v-model="form.content"
        required
        class="textarea textarea-bordered h-48 w-full"
        :placeholder="t('system.work.notes_page.note_description_placeholder')"
      ></textarea>
    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-2">
      <button type="submit" class="btn btn-primary">
        {{ t('common.create') }}
      </button>
      <button type="button" class="btn btn-neutral" @click="cancel">
        {{ t('common.cancel') }}
      </button>
    </div>

  </form>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

/* ------------------ PROPS ------------------ */

const props = defineProps({
  initialData: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['submit', 'cancel'])

/* ------------------ FORM STATE ------------------ */

const form = reactive({
  title: '',
  content: '',
})

/* ------------------ SYNC WITH PROPS ------------------ */

watch(
  () => props.initialData,
  (data) => {
    if (data) {
      form.title = data.title
      form.content = data.content
    } else {
      form.title = ''
      form.content = ''
    }
  },
  { immediate: true }
)

/* ------------------ ACTIONS ------------------ */

const submit = () => {
  emit('submit', { ...form })
}

const cancel = () => {
  emit('cancel')
}
</script>

<style scoped></style>
