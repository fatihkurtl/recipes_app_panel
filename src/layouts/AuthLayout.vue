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
    <div class="bg-gray-200 mx-auto max-w-full px-4 py-4">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <slot />
        </div>
    </div>
    <FooterLayout />
</template>

<style scoped></style>