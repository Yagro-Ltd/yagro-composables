import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@unocss/reset/eric-meyer.css'
import 'virtual:uno.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
