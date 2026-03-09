<script setup lang="ts">
defineProps<{
    positionClass: string;
    colorClass: string;
}>();
</script>

<template>
    <div :class="[
        'absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 dark:opacity-20 animate-blob z-0 pointer-events-none transition-opacity duration-1000',
        positionClass,
        colorClass
    ]"></div>
</template>

<style scoped>
.animate-blob {
    animation: blob 10s infinite alternate cubic-bezier(0.4, 0, 0.6, 1);
}
@keyframes blob {
    0% { transform: scale(1) translate(0px, 0px); }
    33% { transform: scale(1.1) translate(30px, -50px); }
    66% { transform: scale(0.9) translate(-20px, 20px); }
    100% { transform: scale(1.05) translate(10px, -20px); }
}
</style>
