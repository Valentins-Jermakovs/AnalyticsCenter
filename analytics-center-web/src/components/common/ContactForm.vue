<template>
  <!-- Form -->
  <div class="flex flex-col gap-3 w-full">
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      class="flex flex-col flex-1 gap-4"
    >
      <!-- Access Key -->
      <input type="hidden" name="access_key" value="f5c7a756-f35d-487b-b41c-d15805c7fec7" />

      <!-- Redirect URL -->
      <input type="hidden" name="redirect" value="http://localhost:5173/email-redirect" />

      <!-- Name -->
      <div class="form-control flex flex-col gap-1">
        <label for="name" class="label">
          <span class="label-text">
            {{ t('system.topbar.modals.email.form_username') }}
          </span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          :placeholder="t('system.topbar.modals.email.username_placeholder')"
          class="input input-bordered w-full"
        />
      </div>

      <!-- Email + Phone -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div class="form-control flex flex-col gap-1">
          <label for="email" class="label">
            <span class="label-text">
              {{ t('system.topbar.modals.email.form_email') }}
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxlength="254"
            :placeholder="t('system.topbar.modals.email.email_placeholder')"
            class="input input-bordered w-full"
          />
        </div>

        <div class="form-control flex flex-col gap-1">
          <label for="phone" class="label">
            <span class="label-text">
              {{ t('system.topbar.modals.email.form_telephone') }}
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            minlength="10"
            maxlength="15"
            :placeholder="t('system.topbar.modals.email.telephone_placeholder')"
            class="input input-bordered w-full"
          />
        </div>
      </div>

      <!-- Subject -->
      <div class="form-control flex flex-col gap-1">
        <label for="subject" class="label">
          <span class="label-text">
            {{ t('system.topbar.modals.email.form_title') }}
          </span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          maxlength="78"
          required
          :placeholder="t('system.topbar.modals.email.title_placeholder')"
          class="input input-bordered w-full"
        />
      </div>

      <!-- Counter ABOVE textarea -->
      <div class="w-full flex justify-end text-sm opacity-70 pr-1">
        {{ remainingChars }} / {{ maxLength }}
      </div>

      <!-- Message -->
      <div class="form-control flex flex-col gap-1">
        <label for="message" class="label">
          <span class="label-text">
            {{ t('system.topbar.modals.email.form_content') }}
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          v-model="message"
          :maxlength="maxLength"
          required
          :placeholder="t('system.topbar.modals.email.content_placeholder')"
          class="textarea textarea-bordered w-full resize-none h-56"
        ></textarea>
      </div>

      <!-- Submit -->
      <button type="submit" class="btn btn-primary btn-lg mt-3">
        {{ t('common.confirm') }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const message = ref('')
const maxLength = 2000
const remainingChars = computed(() => maxLength - message.value.length)
</script>

<style scoped></style>
