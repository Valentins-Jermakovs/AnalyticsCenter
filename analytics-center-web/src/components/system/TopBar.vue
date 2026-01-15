<template>
  <div
    class="flex bg-base-200 items-center pl-2 pr-4 py-2 border-b border-base-300 justify-between"
  >
    <!-- LEFT: burger + logo -->
    <div class="flex items-center gap-4">
      <burger-button></burger-button>
      <!-- logo -->
      <logo></logo>
    </div>
    <!-- Date & Time -->
    <div class="hidden lg:flex gap-3 rounded-field bg-base-200 font-semibold">
      <!-- DATE -->
      <h1>
        {{ date }}
      </h1>
      <!-- TIME -->
      <h1>
        {{ time }}
      </h1>
    </div>
    <!-- RIGHT: buttons -->
    <div class="flex">
      <top-button
        v-for="(item, index) in navigation"
        :key="index"
        :titleKey="item.titleKey"
        :icon="item.icon"
        @click="item.modal && openModal(item.modal)"
      ></top-button>
    </div>
    <!-- Email Modal -->
    <BaseDialog
      v-model="emailModal"
      :title="$t('system.topbar.modals.email.title')"
      :cancel-text="$t('common.cancel')"
    >
      <ContactForm></ContactForm>
    </BaseDialog>

    <!-- Language Modal -->
    <BaseDialog
      v-model="languageModal"
      :title="$t('system.topbar.modals.language.title')"
      :cancel-text="$t('system.topbar.modals.language.cancel')"
    >
      <button
        class="btn btn-neutral hover:btn-primary btn-sm w-full mb-2"
        @click="changeLocale('en')"
      >
        {{ $t('system.topbar.modals.language.english') }}
      </button>
      <button
        class="btn btn-neutral hover:btn-primary btn-sm w-full mb-2"
        @click="changeLocale('lv')"
      >
        {{ $t('system.topbar.modals.language.latvian') }}
      </button>
      <button class="btn btn-neutral hover:btn-primary btn-sm w-full" @click="changeLocale('ru')">
        {{ $t('system.topbar.modals.language.russian') }}
      </button>
    </BaseDialog>

    <!-- Support Modal -->
    <BaseDialog
      v-model="supportModal"
      :title="$t('common.support')"
      :cancel-text="$t('system.topbar.modals.language.cancel')"
    >
      <!-- 3 books -->
      <!-- License, User manual, Policy -->
      <div class="flex flex-col gap-2">
        <div
          v-for="(doc, index) in documents"
          :key="index"
          class="flex-1 flex flex-col bg-base-200 border border-base-300 p-5 hover:scale-105 transform transition-transform duration-500"
        >
          <a :href="doc.link" target="_blank" class="hover:underline">
            <font-awesome-icon icon="fa-regular fa-circle-question" />
            {{ doc.title }}
          </a>
        </div>
      </div>
    </BaseDialog>

    <!-- Logout Modal -->
    <BaseDialog
      v-model="logoutModal"
      :title="$t('system.topbar.modals.logout.title')"
      :confirm-text="$t('system.topbar.modals.logout.confirm')"
      :cancel-text="$t('system.topbar.modals.logout.cancel')"
      @confirm="handleLogout"
    >
      {{ $t('system.topbar.modals.logout.content') }}
    </BaseDialog>
  </div>
</template>

<script setup>
// pdf documents - to be opened in new tab
const userManual = {
  link: '/docs/user_manual.pdf',
  title: 'User Manual',
}
const license = {
  link: '/docs/license.pdf',
  title: 'License',
}
const policy = {
  link: '/docs/policy.pdf',
  title: 'Privacy Policy',
}

const documents = [userManual, license, policy]

import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import BurgerButton from './topbar/BurgerButton.vue'
import Logo from './topbar/Logo.vue'
import TopButton from './topbar/TopButton.vue'
import BaseDialog from '../ui/BaseDialog.vue'
import ContactForm from '../common/ContactForm.vue'

const router = useRouter()

// navigation
const navigation = [
  { titleKey: 'system.topbar.email', icon: 'fa-solid fa-envelope', modal: 'email' },
  { titleKey: 'system.topbar.language', icon: 'fa-solid fa-globe', modal: 'language' },
  { titleKey: 'system.topbar.support', icon: 'fa-solid fa-question-circle', modal: 'support' },
  { titleKey: 'system.topbar.logout', icon: 'fa-solid fa-circle-xmark', modal: 'logout' },
]

// modals
const supportModal = ref(false)
const emailModal = ref(false)
const languageModal = ref(false)
const logoutModal = ref(false)

// open modal logic
const openModal = (modalName) => {
  if (modalName === 'email') emailModal.value = true
  else if (modalName === 'language') languageModal.value = true
  else if (modalName === 'logout') logoutModal.value = true
  else if (modalName === 'support') supportModal.value = true
}

const handleLogout = () => {
  router.push({ name: 'logout' })
  logoutModal.value = false
}

// language
const { locale } = useI18n({ useScope: 'global' })

// Change language
const changeLocale = (code) => {
  locale.value = code
  languageModal.value = false
}

const date = ref(new Date().toLocaleDateString())
const time = ref('')
const timer = ref(null)
const updateTime = () => {
  timer.value = setTimeout(() => {
    time.value = new Date().toLocaleTimeString()
    // Remove seconds from time
    time.value = time.value.slice(0, -3)
    updateTime()
  }, 1000)
}
onMounted(() => {
  updateTime()
})
onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<style scoped></style>
