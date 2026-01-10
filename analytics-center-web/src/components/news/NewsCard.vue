<template>
  <div class="card bg-base-200 shadow-md hover:shadow-xl transition">
    <figure class="h-40 overflow-hidden">
      <img :src="news.image" class="w-full h-full object-cover" />
    </figure>

    <div class="card-body gap-3">
      <h2 class="card-title text-lg">{{ news.title }}</h2>

      <p class="text-sm text-base-content/70 line-clamp-3">
        {{ news.description }}
      </p>

      <div class="card-actions justify-end">
        <RouterLink :to="{ name: 'newsDetails', params: { id: news.id } }" class="btn btn-outline btn-primary btn-sm">
          Lasīt vairāk
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: Object
})
</script>
