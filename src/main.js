import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/css/styles.css'
import 'boxicons'
import "bootstrap-icons/font/bootstrap-icons";

createApp(App).use(store).use(router).mount('#app')
