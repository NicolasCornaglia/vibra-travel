import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'
import TermsPage from '../components/pages/TermsPage.vue'
import FAQPage from '../components/pages/FAQPage.vue'
import SportsPage from '../components/pages/SportsPage.vue'
import PadelPage from '../components/pages/PadelPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/terms',
    name: 'Terms',
    component: TermsPage
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQPage
  },
  {
    path: '/sports',
    name: 'Sports',
    component: SportsPage
  }
  ,
  {
    path: '/padel',
    name: 'Padel',
    component: PadelPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedPosition || { top: 0 })
      }, 300)
    })
  }
})

export default router