import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import stores from '@/stores'
import Router from '@/router'

createApp(App).use(stores).use(Router).mount('#app')
