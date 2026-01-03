<template>
  <div class="flex-1 card card-border border-base-300 bg-base-200">
    <div class="card-title text-2xl p-3">{{ title }}</div>
    <div class="card-body p-5 flex flex-col gap-2">
      <div class="text-lg">{{ date }}</div>
      <div class="badge badge-outline badge-info p-2 text-sm">{{ time }}</div>
      <div class="mt-2">{{ description }}</div>
      <div class="card-actions justify-end pt-2">
        <button class="btn btn-primary">View</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    date: String,
    time: String,
    description: String,
  },
}
</script>

<style scoped></style>
