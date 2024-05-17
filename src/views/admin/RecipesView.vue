<script setup lang="ts">
import AdminLayout from "@/layouts/AdminLayout.vue";
import RecipesTable from "@/components/local/recipes/RecipesTable.vue";
import RecipesInfoCard from "@/components/local/recipes/RecipesInfoCard.vue";

console.log("API URL => ", import.meta.env.VITE_API_URL);
console.log("WS URL => ", import.meta.env.VITE_WS_URL);
console.log("MODE => ", import.meta.env.MODE);
</script>

<template>
  <AdminLayout>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div class="col-span-full md:col-span-2 lg:col-span-2 xl:col-span-3">
        <RecipesTable />
      </div>

      <div class="col-span-full md:col-span-2 lg:col-span-1 xl:col-span-1 p-3 sm:p-5">
        <RecipesInfoCard />
      </div>
    </div>
  </AdminLayout>
</template>
