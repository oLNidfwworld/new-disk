import HomeView from '@/components/view/home-view.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: HomeView,
    },
  ],
})

export default router
