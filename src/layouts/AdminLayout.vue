<script setup lang="ts">
import NavbarLayout from './global/navbar/NavbarLayout.vue';
import FooterLayout from './global/FooterLayout.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite()
})

</script>

<template>
    <NavbarLayout />
    <div class="bg-gray-200 mx-auto max-w-full px-2 py-2">
        <slot />
    </div>
    <FooterLayout />
</template>

<style scoped></style>