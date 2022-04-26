import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/auth/SignIn.vue'
import SignUp from '../views/auth/SignUp.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import MainLayout from '../views/main/MainLayout.vue'
import mainRoutes from './main.router'

const routes = [
  {
    path: '/',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword
  },
  {
    path: '/main',
    name: 'main',
    component: MainLayout,
    children: mainRoutes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
