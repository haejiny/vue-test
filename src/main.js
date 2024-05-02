import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import messages from './lang/index'

const i18n = createI18n({
    legacy: false,
    locale: 'KO',
    fallbackLocale: 'EN',
    messages : messages    
})

createApp(App).use(i18n).mount('#app')
