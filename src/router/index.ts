import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/admin/HomeView.vue'
import EditRecipesView from '@/views/admin/EditRecipesView.vue'
import DetailView from '@/views/admin/DetailView.vue'
import AboutView from '@/views/admin/AboutView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import ContactView from '@/views/admin/ContactView.vue'
import AddRecipesView from '@/views/admin/AddRecipesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/recipes/:name',
      name: 'Recipe Details',
      component: DetailView
    },
    {
      path: '/add/recipe',
      name: 'Add Recipe',
      component: AddRecipesView
    },
    {
      path: '/edit/:name',
      name: 'Edit Recipe',
      component: EditRecipesView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ]
})

router.beforeEach(() => {})

export default router
