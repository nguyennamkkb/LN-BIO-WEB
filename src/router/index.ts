import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginPage from '../views/auth/login.vue'

const routes  =  [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',

      component: HomeView
    },
    {
      path: '/login',
      name: 'login',

      component: loginPage
    }
  ]
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
