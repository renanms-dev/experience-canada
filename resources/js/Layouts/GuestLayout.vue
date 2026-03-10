<script setup>
import { onMounted } from 'vue';
import MainLayout from '@/Layouts/MainLayout.vue';
import { Link } from '@inertiajs/vue3';

onMounted(() => {
    // Check local storage or system preference to apply dark mode class
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});
</script>

<template>
    <MainLayout>
        <div class="flex min-h-[calc(100vh-theme(spacing.20))] flex-col items-center justify-center bg-gray-50 py-12 dark:bg-gray-900 transition-colors duration-300">
            
            <div class="mb-8 text-center">
                <Link href="/" class="text-4xl font-bold font-heading text-brand-800 dark:text-brand-400 drop-shadow-sm">
                    {{ $t('footer.brand') }}<span class="text-accent-600 dark:text-accent-400">{{ $t('footer.accent') }}</span>
                </Link>
            </div>

            <div class="w-full overflow-hidden bg-white px-6 py-8 shadow-xl border border-gray-100 dark:border-gray-800 sm:max-w-md sm:rounded-2xl dark:bg-gray-800 transition-colors duration-300">
                <slot />
            </div>
        </div>
    </MainLayout>
</template>
