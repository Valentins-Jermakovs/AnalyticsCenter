<template>
  <!-- login form -->
  <div class="divider"></div>
  <form action="" class="flex flex-col gap-5">
    <div class="form-control flex flex-col gap-2">
      <label class="label">
        <span class="label-text">{{ $t('auth.email') }}</span>
      </label>
      <input type="email" :placeholder="$t('auth.email')" class="input input-bordered w-full" />
    </div>
    <div class="form-control flex flex-col gap-2">
      <label class="label">
        <span class="label-text">{{ $t('auth.username') }}</span>
      </label>
      <input type="text" :placeholder="$t('auth.username')" class="input input-bordered w-full" />
    </div>
    <div class="form-control flex flex-col gap-2">
      <label class="label">
        <span class="label-text">{{ $t('auth.password') }}</span>
      </label>
      <input
        type="password"
        :placeholder="$t('auth.password')"
        class="input input-bordered w-full"
      />
    </div>
    <div class="form-control flex flex-col gap-2">
      <label class="label">
        <span class="label-text">{{ $t('auth.confirm_password') }}</span>
      </label>
      <input
        type="password"
        :placeholder="$t('auth.confirm_password')"
        class="input input-bordered w-full"
      />
    </div>
  </form>
  <div class="flex mt-6">
    <button class="btn btn-primary flex-1">{{ $t('auth.register') }}</button>
  </div>
  <div class="divider"></div>
</template>

<script setup></script>

<style scoped></style>
