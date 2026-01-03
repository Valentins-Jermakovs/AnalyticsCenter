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
    <!-- Search Modal -->
    <BaseDialog
      v-model="searchModal"
      :title="$t('system.topbar.modals.search.title')"
      :cancel-text="$t('system.topbar.modals.search.cancel')"
    >
      <input
        class="input input-bordered w-full"
        :placeholder="$t('system.topbar.modals.search.placeholder')"
      />
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
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import BurgerButton from './topbar/BurgerButton.vue'
import Logo from './topbar/Logo.vue'
import TopButton from './topbar/TopButton.vue'
import BaseDialog from '../ui/BaseDialog.vue'

const router = useRouter()

// navigation
const navigation = [
  { titleKey: 'system.topbar.search', icon: 'fa-solid fa-magnifying-glass', modal: 'search' },
  { titleKey: 'system.topbar.language', icon: 'fa-solid fa-globe', modal: 'language' },
  { titleKey: 'system.topbar.support', icon: 'fa-solid fa-question-circle' },
  { titleKey: 'system.topbar.settings', icon: 'fa-solid fa-gear' },
  { titleKey: 'system.topbar.logout', icon: 'fa-solid fa-circle-xmark', modal: 'logout' },
]

// modals
const searchModal = ref(false)
const languageModal = ref(false)
const logoutModal = ref(false)

// open modal logic
const openModal = (modalName) => {
  if (modalName === 'search') searchModal.value = true
  else if (modalName === 'language') languageModal.value = true
  else if (modalName === 'logout') logoutModal.value = true
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
</script>

<style scoped></style>
