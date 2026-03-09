<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// We use the partner logos provided by the institution
const partners = [
    { name: 'Teccart', component: '/images/partners/teccart.png', darkComponent: '/images/partners/teccart_dark.png' },
    { name: 'Collège LaSalle', component: '/images/partners/lasalle2.png', darkComponent: '/images/partners/lasalle2_dark.png' },
    { name: 'Herzing College', component: '/images/partners/herzing.png', darkComponent: '/images/partners/herzing_dark.png' },
    { name: 'Burnaby School District', component: '/images/partners/burnaby.png', darkComponent: '/images/partners/burnaby_dark.png' },
    { name: 'BLI Language Schools', component: '/images/partners/bli.png', darkComponent: '/images/partners/bli_dark.png' }
];

// Double the array to create seamless infinite scroll effect
const repeatedPartners = [...partners, ...partners];
</script>

<template>
    <section class="py-16 bg-white dark:bg-gray-900 overflow-hidden border-t border-b border-gray-100 dark:border-gray-800 transition-colors duration-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
            <h3 class="text-sm font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase transition-colors">
                {{ $t('partners.title') }}
            </h3>
        </div>
        
        <div class="relative w-full flex overflow-hidden">
            <!-- Left Gradient Fade -->
            <div class="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
            
            <!-- Marquee Container -->
            <div class="flex animate-marquee min-w-max items-center py-4">
                <div v-for="(partner, index) in repeatedPartners" 
                     :key="index" 
                     class="flex-shrink-0 mx-8 md:mx-16 flex items-center justify-center transition-all duration-300 hover:scale-105">
                    <img :src="partner.component" :alt="partner.name" class="h-16 md:h-20 object-contain drop-shadow-sm transition-all duration-500 dark:hidden" />
                    <img :src="partner.darkComponent" :alt="partner.name" class="h-16 md:h-20 object-contain drop-shadow-md transition-all duration-500 hidden dark:block" />
                </div>
            </div>
            
            <!-- Right Gradient Fade -->
            <div class="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none transition-colors duration-500"></div>
        </div>
    </section>
</template>

<style scoped>
.animate-marquee {
    animation: scroll 40s linear infinite;
}

.animate-marquee:hover {
    animation-play-state: paused;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        /* Move exactly -50% to cycle cleanly back to 0 due to doubled array */
        transform: translateX(-50%);
    }
}
</style>
