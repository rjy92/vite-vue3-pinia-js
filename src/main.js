import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import stores from '@/stores'

createApp(App).use(stores).mount('#app')
