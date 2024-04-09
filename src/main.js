import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import stores from '@/stores'
import Router from '@/router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
//全局注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

console.log('come in ', import.meta.env.VITE_APP_BASE_HOST)
app.use(ElementPlus).use(stores).use(Router).mount('#app')
