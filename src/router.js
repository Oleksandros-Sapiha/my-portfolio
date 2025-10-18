import { createRouter, createWebHistory } from 'vue-router';
import NavDashboard from './pages/NavDashboard.vue'
import HomePage from './pages/HomePage.vue'
import WorkList from './components/WorkList.vue'
import FooterComponent from './components/FooterComponent.vue'

const routes = [
   {
      path: '/admin/homepage',
      component: HomePage
   },
   {
      path: '/admin/archive',
      component: ArchivePage
   },
   {
      path: '/login',
      component: LoginPage
   }
]
   const router = createRouter({
   history: createWebHistory('/last-project/'),
   routes,
   });

export default router;