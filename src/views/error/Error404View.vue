<script setup lang="ts">

</script>

<template>
    <section class="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div class="max-w-md text-center">
                <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-400">
                    <span class="sr-only">Error</span>404
                </h2>
                <p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p class="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our
                    homepage.</p>
                <a rel="noopener noreferrer" href="#"
                    class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    <RouterLink to="/">
                        Back to homepage
                    </RouterLink>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped></style>