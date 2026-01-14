<template>
  <div class="w-full lg:w-1/2 xl:w-1/3 mx-auto lg:py-5">
    <div class="card bg-base-200 border border-base-300">
      <div class="card-body gap-4">

        <!-- Title -->
        <div class="form-control flex flex-col gap-1">
          <label class="label">
            <span class="label-text">
                {{ t('system.calendar.form.event_title') }}
            </span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full"
            :placeholder="t('system.calendar.form.event_title_placeholder')"
          />
        </div>

        <!-- Date -->
        <div class="form-control flex flex-col gap-1">
          <label class="label">
            <span class="label-text">
                {{ t('system.calendar.form.event_date') }}
            </span>
          </label>
          <input
            type="date"
            class="input input-bordered w-full"
          />
        </div>

        <!-- Time range -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="form-control gap-1">
            <label class="label">
              <span class="label-text">
                {{ t('system.calendar.form.event_start') }}
              </span>
            </label>
            <input
              type="time"
              class="input input-bordered"
            />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">
                {{ t('system.calendar.form.event_end') }}
              </span>
            </label>
            <input
              type="time"
              class="input input-bordered"
            />
          </div>
        </div>

        <!-- Description -->
        <div class="form-control flex flex-col gap-1">
          <label class="label">
            <span class="label-text">
                {{ t('system.calendar.form.event_description') }}
            </span>
          </label>
          <textarea
            class="textarea textarea-bordered w-full"
            :placeholder="t('system.calendar.form.event_description_placeholder')"
          ></textarea>
        </div>

        <!-- Submit -->
        <button class="btn btn-primary mt-2">
          {{ t('common.create') }}
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>
