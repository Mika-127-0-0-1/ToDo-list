import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',

      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/register',
      name: 'register',

      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/create',
      name: 'create',

      component: () => import('../views/CreateView.vue')
    }
  ]
})

export default router
