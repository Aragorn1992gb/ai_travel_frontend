import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import Dashboard from '../pages/Dashboard.vue'
import PlanningPage from '../pages/PlanningPage.vue'
import RatingPage from '../pages/RatingPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/dashboard', component: Dashboard },
  { path: '/new-itinerary', component: PlanningPage },
  { path: '/rating', component: RatingPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router