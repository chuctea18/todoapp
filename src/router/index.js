import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/auth/SignIn.vue'
import mainRoutes from './main.router'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: SignIn
  },
  {
    path: '/main',
    name: 'main',
    children: mainRoutes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
