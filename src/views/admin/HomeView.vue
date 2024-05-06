<script setup lang="ts">
import RecipesTable from "@/components/local/home/RecipesTable.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";

console.log("API URL => ", import.meta.env.VITE_API_URL);
console.log("MODE => ", import.meta.env.MODE);
</script>

<template>
  <AdminLayout>
    <RecipesTable />
  </AdminLayout>
</template>
