<script setup lang="ts">
import { ref } from 'vue';
import AdminLayout from '@/layouts/AdminLayout.vue';

const users = ref<number>(2.7);
const subscribes = ref<number>(1.8);
const recipes = ref(35);
const products = ref(4);

const popularCategories = ref([
  {
    name: 'Italian',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Mexican',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Indian',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Chinese',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
]);

const newMembers = ref([
  {
    name: 'John Doe',
    email: 'john@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
]);

const latestRecipes = ref([
  {
    name: 'Classic Lasagna',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Spaghetti Carbonara',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Chicken Alfredo',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Penne Arrabiata',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Lasagna',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
]);


</script>

<template>
  <AdminLayout>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <!-- Ana Bileşen: Kullanıcılar, Aboneler, Tarifler, Ürünler -->
      <div class="col-span-full md:col-span-2 lg:col-span-3 xl:col-span-4">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold mb-6">Dashboard Overview</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <!-- Kullanıcılar -->
            <div class="bg-gray-100 rounded-lg p-4 shadow flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold mb-2">Users</h3>
                <p class="text-3xl font-bold">{{ users }}</p>
              </div>
              <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500" viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm-3-6a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1-7a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                  clip-rule="evenodd" />
              </svg> -->
              <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>

            </div>
            <!-- Aboneler -->
            <div class="bg-gray-100 rounded-lg p-4 shadow flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold mb-2">Subscribers</h3>
                <p class="text-3xl font-bold">{{ subscribes }}</p>
              </div>
              <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
              </svg>
            </div>
            <!-- Tarifler -->
            <div class="bg-gray-100 rounded-lg p-4 shadow flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold mb-2">Recipes</h3>
                <p class="text-3xl font-bold">{{ recipes }}</p>
              </div>
              <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z" />
              </svg>

            </div>
            <!-- Ürünler -->
            <div class="bg-gray-100 rounded-lg p-4 shadow flex items-center justify-between">
              <div>
                <h3 class="text-lg font-semibold mb-2">Products</h3>
                <p class="text-3xl font-bold">{{ products }}</p>
              </div>
              <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.583 8.445h.01M10.86 19.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 12.31 4l5.734.007A1.968 1.968 0 0 1 20 5.983v5.5a.992.992 0 0 1-.316.727l-7.44 7.5a.974.974 0 0 1-1.384.001Z" />
              </svg>

            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="col-span-full md:col-span-2 lg:col-span-1 xl:col-span-2">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold mb-4">Recent Activity</h2>
          <ul class="list-disc list-inside">
            <li class="mb-2">User signed up</li>
            <li class="mb-2">New recipe added</li>
            <li class="mb-2">Subscription renewed</li>
            <li class="mb-2">Product purchased</li>
            <li class="mb-2">Recipe shared</li>
          </ul>
        </div>
      </div>

      <!-- Popular Categories -->
      <div class="col-span-full md:col-span-2 lg:col-span-1 xl:col-span-2">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold mb-4">Popular Categories</h2>
          <ul class="list-disc list-inside">
            <li v-for="(category, index) in popularCategories" :key="index" class="mb-2 flex items-center">
              <img :src="category.image" class="w-8 h-8 rounded-full mr-2">
              <div>
                <p class="font-semibold">{{ category.name }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-span-full md:col-span-2 lg:col-span-1 xl:col-span-2">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold mb-4">New Members</h2>
          <ul class="list-disc list-inside">
            <li v-for="(user, index) in newMembers" :key="index" class="mb-2 flex items-center">
              <img :src="user.imageUrl" class="w-8 h-8 rounded-full mr-2">
              <div>
                <p class="font-semibold">{{ user.name }}</p>
                <p class="text-gray-600 text-sm">{{ user.email }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-span-full md:col-span-2 lg:col-span-1 xl:col-span-2">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold mb-4">Latest Recipes</h2>
          <ul class="list-disc list-inside">
            <li v-for="(recipe, index) in latestRecipes" :key="index" class="mb-2 flex items-center">
              <img :src="recipe.image" class="w-8 h-8 rounded-full mr-2">
              <div>
                <p class="font-semibold">{{ recipe.name }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>


    </div>
  </AdminLayout>
</template>

<style scoped>
/* Ek stillendirme yapabilirsiniz */
</style>
