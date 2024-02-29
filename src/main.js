import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/usePrecioXHora'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)

app.use(store).use(pinia).use(router).mount('#app')
