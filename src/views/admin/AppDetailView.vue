<script setup lang="ts">
import { ref } from 'vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import ButtonLayout from '@/layouts/local/forms/ButtonLayout.vue';
import type { imagePreview } from '@/interface/app_detail';


const carouselImagesPreview = ref<imagePreview[]>([])
const drawerHeaderLogoPreview = ref<imagePreview[]>([])


const handleCarouselImages = (event: Event): void => {
    const target = event.target as HTMLInputElement
    const files = target.files
    const imagesRegex = /\.(jpeg|png|svg)$/i
    const maxSizeInBytes = 5242880; // 5MB

    if (files && carouselImagesPreview.value.length <= 5) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            const reader = new FileReader()

            if (!imagesRegex.test(file.name)) {
                alert('Only images are allowed to upload (jpeg, png, svg).')
                return
            }

            if (file.size > maxSizeInBytes) {
                alert('File size is too large to upload. Max size is 5MB.')
                return
            }

            reader.onload = (e) => {
                const url = e.target?.result as string
                carouselImagesPreview.value.push({ url, name: file.name })
            }
            reader.readAsDataURL(file)
        }
    }
}

const handleDrawerHeaderImages = (event: Event): void => {
    const target = event.target as HTMLInputElement
    const files = target.files
    const imagesRegex = /\.(jpeg|png|svg)$/i
    const maxSizeInBytes = 5242880; // 5MB

    if (files && drawerHeaderLogoPreview.value.length <= 1) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            const reader = new FileReader()

            if (!imagesRegex.test(file.name)) {
                alert('Only images are allowed to upload (jpeg, png, svg).')
                return
            }

            if (file.size > maxSizeInBytes) {
                alert('File size is too large to upload. Max size is 5MB.')
                return
            }

            reader.onload = (e) => {
                const url = e.target?.result as string
                drawerHeaderLogoPreview.value.push({ url, name: file.name })
            }
            reader.readAsDataURL(file)
        }
    }
}

const removeImage = (index: number): void => {
    carouselImagesPreview.value.splice(index, 1)
}

const saveImages = (): void => {
    console.log('carouselImagesPreview', carouselImagesPreview.value)
    console.log('drawerHeaderLogoPreview', drawerHeaderLogoPreview.value)
}

</script>

<template>
    <AdminLayout>
        <div class="dark:bg-gray-800 py-8 px-4 mx-auto max-w-3xl lg:py-16">
            <div class="bg-white rounded-lg py-8 px-4 mx-auto lg:py-6"> <!-- max-w-2xl lg:py-16 -->
                <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">App Detail Settings</h2>
                <form @submit.prevent="saveImages">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="w-full">
                            <label for="drawer-logo"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                                Drawer Header Logo
                            </label>
                            <input @change="handleDrawerHeaderImages($event)"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="file_input_help" id="file_input" type="file">
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                SVG, PNG, JPG (MAX. 5MB).
                            </p>
                            <div v-if="drawerHeaderLogoPreview.length > 0" class="relative w-full">
                                <img v-for="(images, index) in drawerHeaderLogoPreview" :key="index"
                                    class="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
                                    :src="images.url" :alt="images.name">
                            </div>
                        </div>
                        <div class="sm:col-span-2" @dragover.prevent @dragenter.prevent
                            @drop="handleCarouselImages($event)">
                            <label for="carousel-slider-images"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Carousel Slider Images
                            </label>
                            <label for="dropzone-file"
                                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span
                                            class="font-semibold">Yüklemek için tıklayın</span> veya sürükleyip
                                        bırakın
                                    </p>
                                    <p class="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG (MAX. 5MB).
                                    </p>
                                </div>
                                <input @change="handleCarouselImages($event)" multiple accept="image/*"
                                    id="dropzone-file" type="file" class="hidden" />
                            </label>
                        </div>
                        <section v-if="carouselImagesPreview.length > 0" class="dark:bg-gray-900">
                            <label for="carousel-slider-images"
                                class="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
                                Carousel Slider Preview
                            </label>
                            <div class="text-center">
                                <div class="grid gap-12 lg:gap-28 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                                    <div v-for="(image, index) in carouselImagesPreview" :key="index"
                                        class="text-center text-gray-500 dark:text-gray-400 items-center relative">
                                        <div class="relative w-24 h-24 mx-auto">
                                            <img class="max-w-xs w-full h-full" :src="image?.url" :alt="image?.name">
                                            <button @click.stop="removeImage(index)"
                                                class="z-10 absolute top-0 right-0 transform translate-x-2/4 -translate-y-2/4 bg-red-200 text-red-800 text-xs font-medium px-1 py-0.5 rounded-full hover:bg-red-300 dark:bg-red-900 dark:text-red-300">
                                                <span class="material-symbols-outlined text-xs">
                                                    close
                                                </span>
                                            </button>
                                        </div>
                                        <p class="text-xs">{{ image.name }}</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="carouselImagesPreview.length > 0"
                                class="relative w-full flex gap-4 py-6 overflow-x-auto">
                                <img v-for="(images, index) in carouselImagesPreview" :key="index"
                                    class="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
                                    :src="images.url" :alt="images.name">
                            </div>
                        </section>
                    </div>
                    <ButtonLayout>
                        <template #form-button>
                            Save Images
                        </template>
                    </ButtonLayout>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped></style>