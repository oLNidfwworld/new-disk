import HomeView from '@/components/view/home-view.vue'
import NotesView from '@/components/view/notes-view.vue'
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
      path: '/notes',
      name: 'Notes',
      component: NotesView,
    },
  ],
})

export default router
