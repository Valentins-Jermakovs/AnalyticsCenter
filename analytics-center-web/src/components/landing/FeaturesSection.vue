<template>
  <section class="py-16 bg-base-100">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-12">{{ $t('features.title') }}</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="card shadow-lg p-6 bg-base-200">
          <div class="text-4xl mb-4">
            <font-awesome-icon icon="tasks" />
          </div>
          <h3 class="text-xl font-semibold mb-2">
            {{ $t('features.tasks') }}
          </h3>
          <p>{{ $t('features.tasks_description') }}</p>
        </div>
        <div class="card shadow-lg p-6 bg-base-200">
          <div class="text-4xl mb-4">
            <font-awesome-icon icon="calendar-alt" />
          </div>
          <h3 class="text-xl font-semibold mb-2">
            {{ $t('features.events') }}
          </h3>
          <p>{{ $t('features.events_description') }}</p>
        </div>
        <div class="card shadow-lg p-6 bg-base-200">
          <div class="text-4xl mb-4">
            <font-awesome-icon icon="chart-bar" />
          </div>
          <h3 class="text-xl font-semibold mb-2">
            {{ $t('features.analytics') }}
          </h3>
          <p>{{ $t('features.analytics_description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped></style>
