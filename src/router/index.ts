import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'
import PadelTripsPage from '../components/pages/PadelTripsPage.vue'
import TeamBuildingPage from '../components/pages/TeamBuildingPage.vue'
import WhyVibraPage from '../components/pages/WhyVibraPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/padel-trips',
    name: 'PadelTrips',
    component: PadelTripsPage
  },
  {
    path: '/team-building',
    name: 'TeamBuilding',
    component: TeamBuildingPage
  },
  {
    path: '/why-vibra',
    name: 'WhyVibra',
    component: WhyVibraPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (_to, _from, savedPosition) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(savedPosition || { top: 0 })
      }, 300)
    })
  }
})

export default router