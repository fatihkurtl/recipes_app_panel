import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/admin/HomeView.vue'
import DetailView from '@/views/admin/DetailView.vue'
import AddRecipesView from '@/views/admin/AddRecipesView.vue'
import EditRecipesView from '@/views/admin/EditRecipesView.vue'
import UsersView from '@/views/admin/UsersView.vue'
import RecipesView from '@/views/admin/RecipesView.vue'
import AppDetailView from '@/views/admin/AppDetailView.vue'
import ContactView from '@/views/admin/ContactView.vue'
import LoginView from '@/views/auth/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: RecipesView
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
      path: '/users',
      name: 'Users',
      component: UsersView
    },
    {
      path: '/app/detail',
      name: 'App Detail',
      component: AppDetailView
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

// router.beforeEach(() => {})

export default router
