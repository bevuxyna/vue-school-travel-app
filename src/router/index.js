import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination',
    component: () => import('@/views/Destination.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id )})
  },
  {
    path: '/destination/:id/:slug/:experienceSlug',
    name: 'experience',
    component: () => import('@/views/Experience.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id )})
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
