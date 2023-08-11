import { createRouter, createWebHistory } from 'vue-router'
import ShareBioView from '../views/ShareBio.vue'
import HomeView from '../views/HomeView.vue'
import loginPage from '../views/auth/login.vue'

const routes  =  [
    {
      path: '/bio/:urlshare',
      name: 'bio/:urlshare',
      component: ShareBioView
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView
    // },
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
