import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { fbJsdk } from '@/fb'


import '@/assets/base.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from '@/router'

fbJsdk();
const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
