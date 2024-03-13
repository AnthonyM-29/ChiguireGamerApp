import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterView from '@/views/CounterView.vue'
import CounterDouwView from '@/views/CounterDouwView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/counter',
    name: 'counter',
    component: CounterView
  }, 
  {
    path: '/counterDouw',
    name: 'counterDouw',
    component: CounterDouwView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
