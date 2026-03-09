<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

defineProps<{
    title: string;
    description: string;
    icon: any; 
    colorClass?: string;
    delay?: number;
    href?: string;
    linkText?: string;
}>();
</script>

<template>
    <component :is="href ? Link : 'div'" :href="href" v-motion
         :initial="{ opacity: 0, y: 50 }"
         :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: delay || 0 } }"
         class="group bg-white dark:bg-gray-800 rounded-3xl p-8 hover:bg-brand-50 dark:hover:bg-gray-750 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-brand-500/20 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col h-full cursor-pointer relative overflow-hidden">
        
        <div class="absolute right-0 top-0 w-32 h-32 bg-brand-100 dark:bg-gray-700 rounded-bl-full opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>

        <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 relative z-10', colorClass || 'bg-brand-100 text-brand-600 dark:bg-gray-700 dark:text-brand-400']">
            <component :is="icon" class="w-8 h-8" />
        </div>
        
        <h3 class="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-4 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors relative z-10">
            {{ title }}
        </h3>
        
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 flex-grow relative z-10">
            {{ description }}
        </p>
        
        <div class="flex items-center text-brand-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-auto relative z-10">
            <span class="mr-2">{{ linkText || 'Explore Option' }}</span>
            <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </div>
    </component>
</template>
