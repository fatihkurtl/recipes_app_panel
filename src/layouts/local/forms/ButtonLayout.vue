<script setup lang="ts">
const emit = defineEmits<{
    (event: 'btnClick', payload: string): void;
}>();

function handleClick() {
    emit('btnClick', 'Button was clicked!');
}
</script>

<template>
    <button @click="handleClick" type="submit"
        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
        <slot name="form-button" />
    </button>
</template>

<style scoped></style>