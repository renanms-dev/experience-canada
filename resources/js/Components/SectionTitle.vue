<script setup lang="ts">
defineProps<{
    title: string;
    subtitle?: string;
    centered?: boolean;
}>();
</script>

<template>
    <div :class="[centered ? 'text-center' : 'text-left', 'mb-12']"
         v-motion
         :initial="{ opacity: 0, y: 30 }"
         :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring' } }">
        <h2 class="text-3xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-4 tracking-tight">
            {{ title }}
        </h2>
        <p v-if="subtitle" class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed" :class="centered ? 'mx-auto' : ''">
            {{ subtitle }}
        </p>
    </div>
</template>
