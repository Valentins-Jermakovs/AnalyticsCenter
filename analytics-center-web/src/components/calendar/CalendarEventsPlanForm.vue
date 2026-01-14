<template>
  <div class="w-full lg:w-1/2 xl:w-1/3 mx-auto py-5">
    <div class="card bg-base-200 border border-base-300">
      <div class="card-body gap-4">

        <!-- Title -->
        <div class="form-control flex flex-col gap-1">
          <label class="label">
            <span class="label-text">Notikuma nosaukums</span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full"
            placeholder="Ievadi notikuma nosaukumu"
          />
        </div>

        <!-- Date -->
        <div class="form-control flex flex-col gap-1">
          <label class="label">
            <span class="label-text">Notikuma datums</span>
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
              <span class="label-text">Sākums</span>
            </label>
            <input
              type="time"
              class="input input-bordered"
            />
          </div>

          <div class="form-control">
            <label class="label">
              <span class="label-text">Beigas</span>
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
            <span class="label-text">Apraksts</span>
          </label>
          <textarea
            class="textarea textarea-bordered w-full"
            placeholder="Ievadi notikuma aprakstu"
          ></textarea>
        </div>

        <!-- Submit -->
        <button class="btn btn-primary mt-2">
          Pievienot
        </button>

      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped></style>
