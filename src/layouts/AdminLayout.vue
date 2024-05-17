<script setup lang="ts">
import NavbarLayout from './global/navbar/NavbarLayout.vue';
import FooterLayout from './global/FooterLayout.vue';
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
    initFlowbite()
})

// window.addEventListener("scroll", function () {
//     const scrollableHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//     const scrolled: number = window.scrollY;
//     const progressBar: HTMLElement = document.getElementById("scroll-progress")!;
//     const progress: number = (scrolled / scrollableHeight) * 100;
//     progressBar.style.width = progress + "%";
// });


</script>

<template>
    <!-- <div id="scroll-progress" class="bg-blue-700 h-1 fixed top-0 left-0 z-50">
    </div> -->
    <NavbarLayout />
    <div class="bg-gray-200 mx-auto max-w-full px-2 py-2 items-center">
        <slot />
    </div>
    <FooterLayout />
</template>

<style scoped></style>