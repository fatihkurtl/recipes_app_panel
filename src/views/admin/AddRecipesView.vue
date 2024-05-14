<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { marked } from 'marked'
import { debounce } from 'lodash-es'
import AdminLayout from '@/layouts/AdminLayout.vue';
import ButtonLayout from '@/layouts/local/forms/ButtonLayout.vue';
import type { Recipes } from '@/interface/recipes';
import useSwal from '@/composables/useSwal';

const recipeData = reactive<Recipes>({
    tr: {
        title: '',
        thumbnail: [],
        category: '',
        popular: false,
        description: ''
    },
    en: {
        title: '',
        thumbnail: [],
        category: '',
        popular: false,
        description: ''
    }
});

const activeTab = ref<string>('tr')

const output = computed(() => {
    if (activeTab.value === 'tr') {
        return marked(recipeData.tr.description)
    } else {
        return marked(recipeData.en.description)
    }
})

const update = debounce((e) => {
    switch (activeTab.value) {
        case 'tr':
            recipeData.tr.description = e.target.value
            break;
        case 'en':
            recipeData.en.description = e.target.value
            break;
    }
}, 100)

const handleRecipeFile = (event: any): void => {
    event.preventDefault()
    const imagesRegex = /\.(jpeg|png|svg)$/i
    const maxSizeInBytes = 5242880; // 5MB
    if (!imagesRegex.test(event.target.files[0].name)) {
        event.target.value = ''
        alert('Please select a valid image file')
        return
    } else if (event.target.files[0].size > maxSizeInBytes) {
        event.target.value = ''
        alert('File size is too large (MAX. 5MB)')
        return
    } else {
        switch (activeTab.value) {
            case 'tr':
                recipeData.tr.thumbnail = event.target.files
                break;
            case 'en':
                recipeData.en.thumbnail = event.target.files
                break;
        }
    }
}

const handleForm = (): void => {
    const formDataTr = new FormData()
    formDataTr.append('title', recipeData.tr.title)
    formDataTr.append('thumbnail', recipeData.tr.thumbnail[0])
    formDataTr.append('category', recipeData.tr.category)
    formDataTr.append('popular', recipeData.tr.popular.toString())
    formDataTr.append('description', recipeData.tr.description)
    const formDataEn = new FormData()
    formDataEn.append('en_title', recipeData.en.title)
    formDataEn.append('en_thumbnail', recipeData.en.thumbnail[0])
    formDataEn.append('en_category', recipeData.en.category)
    formDataEn.append('en_popular', recipeData.en.popular.toString())
    formDataEn.append('en_description', recipeData.en.description)
    console.log('TR Form Data', formDataTr);
    console.log('EN Form Data', formDataEn);
    console.log(activeTab.value);
}

const { success, confirm } = useSwal()

const addRecipe = async () => {
    const result = await confirm('Are you sure?', "You won't be able to revert this!", 'warning')
    if (result) {
        await success('Recipe added successfully')
        handleForm()
    }
}

</script>

<template>
    <AdminLayout>
        <div class="bg-white dark:bg-gray-800 rounded-lg py-8 px-4 mx-auto max-w-3xl lg:py-16">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new recipe</h2>
            <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
                    data-tabs-toggle="#default-tab-content" role="tablist">
                    <li class="me-2" role="presentation">
                        <button @click="activeTab = 'tr'"
                            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="tr-tab" data-tabs-target="#tr-form" type="button" role="tab" aria-controls="tr-form"
                            aria-selected="false">Türkçe</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button @click="activeTab = 'en'"
                            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                            id="en-tab" data-tabs-target="#en-form" type="button" role="tab" aria-controls="en-form"
                            aria-selected="false">English</button>
                    </li>
                </ul>
            </div>
            <div id="default-tab-content">
                <form @submit.prevent="addRecipe" class="space-y-8" id="tr-form" role="tabpanel"
                    aria-labelledby="tr-tab">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipe
                                Name</label>
                            <input v-model="recipeData.tr.title" type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type recipe name" required>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Thumbnail
                            </label>
                            <input @change="handleRecipeFile($event)"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="file_input_help" id="file_input" type="file">
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                                SVG, PNG, JPG (MAX. 5MB).
                            </p>
                        </div>
                        <div class="w-full">
                            <label for="category"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select v-model="recipeData.tr.category" id="category"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Select category</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="category"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add
                                to Popular recipes</label>
                            <select v-model="recipeData.tr.popular" id="category"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option :value="true">Yes</option>
                                <option :value="false">No</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="description"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description
                                (Markdown)
                            </label>
                            <textarea v-model="recipeData.tr.description" @input="update" id="description" rows="18"
                                class="block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your description here"></textarea>
                        </div>
                        <div class="w-full">
                            <label for="preview"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preview</label>
                            <div v-html="output"
                                class="block p-2.5 w-full h-full text-sm bg-gray-50 rounded-lg border border-gray-300 prose prose-blockquote:dark:bg-gray-600 prose-blockquote:bg-gray-200 prose-img:rounded-xl md:prose-sm lg:prose-sm dark:prose-invert max-w-none dark:text-gray-100 prose-p text-gray-700 mb-4">
                            </div>
                        </div>
                    </div>
                    <ButtonLayout>
                        <template #form-button>
                            Add recipe
                        </template>
                    </ButtonLayout>
                </form>
                <!-- English Form -->
                <form @submit.prevent="addRecipe" class="space-y-8" id="en-form" role="tabpanel"
                    aria-labelledby="en-tab">
                    <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Recipe Name
                            </label>
                            <input v-model="recipeData.en.title" type="text" name="name" id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Type recipe name" required>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Thumbnail
                            </label>
                            <input @change="handleRecipeFile($event)"
                                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                aria-describedby="file_input_help" id="file_input" type="file">
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG
                                (MAX. 5MB).</p>
                        </div>
                        <div class="w-full">
                            <label for="category"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select v-model="recipeData.en.category" id="category"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="">Select category</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="category"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add
                                to Popular recipes</label>
                            <select v-model="recipeData.en.popular" id="category"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option :value="true">Yes</option>
                                <option :value="false">No</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="description"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description
                                (Markdown)
                            </label>
                            <textarea v-model="recipeData.en.description" @input="update" id="description" rows="18"
                                class="block p-2.5 w-full h-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your description here"></textarea>
                        </div>
                        <div class="w-full">
                            <label for="preview"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preview</label>
                            <div v-html="output"
                                class="block p-2.5 w-full h-full text-sm bg-gray-50 rounded-lg border border-gray-300 prose prose-blockquote:dark:bg-gray-600 prose-blockquote:bg-gray-200 prose-img:rounded-xl md:prose-sm lg:prose-sm dark:prose-invert max-w-none dark:text-gray-100 prose-p text-gray-700 mb-4">
                            </div>
                        </div>
                    </div>
                    <ButtonLayout>
                        <template #form-button>
                            Add recipe
                        </template>
                    </ButtonLayout>
                </form>
            </div>
        </div>
    </AdminLayout>
</template>

<style scoped></style>