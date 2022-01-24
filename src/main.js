import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VuePageTransition from 'vue-page-transition'

createApp(App).use(router, VuePageTransition).mount('#app')