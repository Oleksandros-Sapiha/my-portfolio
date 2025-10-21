import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ArchivePage from './pages/ArchivePage.vue'
import LoginPage from './pages/LoginPage.vue'
import FooterComponent from './components/FooterComponent.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/archive', component: ArchivePage },
  { path: '/login', component: LoginPage },
  { path: '/footer', component: FooterComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
