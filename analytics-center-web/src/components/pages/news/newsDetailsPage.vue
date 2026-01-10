<template>
  <div class="max-w-4xl mx-auto p-6">
    <button class="btn btn-ghost mb-4" @click="$router.back()">← Atpakaļ</button>

    <div v-if="news" class="bg-base-100 p-6 rounded-box">
      <img :src="news.image" class="rounded-box mb-5" />

      <h1 class="text-3xl font-bold mb-3">
        {{ news.title }}
      </h1>

      <p class="opacity-70 mb-5">
        {{ news.createdAt }}
      </p>

      <div class="prose max-w-none">
        {{ news.content }}
      </div>
    </div>

    <div v-else class="text-center opacity-60">Ziņa nav atrasta</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNewsStore } from '@/stores/news'

const route = useRoute()
const router = useRouter()
const store = useNewsStore()

const news = computed(() => store.getById(route.params.id))
</script>

<style scoped></style>
