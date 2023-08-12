import { createRouter, createWebHistory } from 'vue-router'
import ShareBioView from '../views/ShareBio.vue'
import AuthPage from '../views/auth/Auth.vue'

const routes  =  [
    {
      path: '/bio/:biourl',
      name: '/bio/:biourl',
      component: ShareBioView
    },
    {
      path: '/auth',
      name: 'auth',

      component: AuthPage
    }
  ]
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
