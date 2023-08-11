import { createRouter, createWebHistory } from 'vue-router'
import ShareBioView from '../views/ShareBio.vue'
import loginPage from '../views/auth/login.vue'

const routes  =  [
    {
      path: '/bio/:biourl',
      name: '/bio/:biourl',
      component: ShareBioView
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
