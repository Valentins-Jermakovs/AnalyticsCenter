import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

import '@/assets/styles/main.css'

// enable axios
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

// import translations
import en from './locales/en.json'
import lv from './locales/lv.json'
import ru from './locales/ru.json'

// setup i18n
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  locale: 'lv', // set default language
  fallbackLocale: 'en', // set fallback language (if current locale is not available)
  messages: {
    en,
    lv,
    ru,
  },
})

const app = createApp(App)

app.use(VueAxios, axios)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')

// dynamically change app title
const { locale, t } = i18n.global

const UpdateTitle = () => {
  document.title = t('app_title') // key from JSON
}

UpdateTitle() // Launch on load

// watch locale changes
watch(locale, () => {
  UpdateTitle()
})
