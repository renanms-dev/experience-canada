<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '../Layouts/MainLayout.vue';
import SectionTitle from '../Components/SectionTitle.vue';
import FeatureCard from '../Components/FeatureCard.vue';
import GradientBlob from '../Components/GradientBlob.vue';
import { ArrowRight, Award, ShieldCheck, HeartHandshake, History, CheckCircle } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();

const stats = computed(() => [
    { value: '+7', label: t('stats.years') },
    { value: '+9', label: t('stats.cities') },
    { value: '100%', label: t('stats.satisfaction') },
    { value: '2017', label: t('stats.founded') },
]);

</script>

<template>
    <Head :title="$t('meta.title_about')" />
    <MainLayout>
        <!-- Hero Section - Clean Story-driven -->
        <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div v-motion
                     :initial="{ opacity: 0, y: 30 }"
                     :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                    <span class="inline-block py-1.5 px-4 rounded-full bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-semibold text-sm mb-8 border border-purple-100 dark:border-purple-800 uppercase tracking-wider transition-colors">
                        {{ $t('nav.about') }}
                    </span>
                    <h1 class="text-5xl lg:text-7xl font-bold font-heading text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8 transition-colors">
                        {{ $t('about.hero.title') }}
                    </h1>
                    <p class="text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed font-light transition-colors">
                        {{ $t('about.hero.desc') }}
                    </p>
                </div>
            </div>

            <!-- Wide Image Showcase -->
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4" 
                 v-motion 
                 :initial="{ opacity: 0, y: 40 }" 
                 :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 200 } }">
                <div class="relative h-[400px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <img src="/images/hero_about.png" alt="About ExperienceCanada" class="absolute inset-0 object-cover w-full h-full" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                </div>
            </div>
        </section>

        <!-- Stats Section (Imported from Welcome) -->
        <section class="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 relative z-20 transition-colors duration-500">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(stat, index) in stats" :key="index"
                         v-motion
                         :initial="{ opacity: 0, y: 20 }"
                         :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
                         class="text-center">
                        <div class="text-4xl md:text-5xl font-bold font-heading text-brand-600 dark:text-brand-400 mb-2 transition-colors">{{ stat.value }}</div>
                        <div class="text-gray-600 dark:text-gray-400 font-medium transition-colors">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values Section - Masonry/Badge Layout -->
        <section class="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-500">
            <GradientBlob colorClass="from-purple-100 to-indigo-100" positionClass="bottom-[10%] right-[10%] w-[500px] h-[500px] blur-[100px]" />

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle 
                    :title="$t('about.values.title')" 
                    :subtitle="$t('about.values.subtitle')"
                    centered 
                />
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
                    <!-- Value 1 -->
                    <div class="glass p-8 rounded-3xl shadow-lg border border-white/60 dark:border-gray-700/60 flex flex-col items-start hover:-translate-y-1 transition-all bg-white/50 dark:bg-gray-800/50" v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }">
                        <div class="inline-flex items-center space-x-3 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-2xl mb-6 transition-colors">
                            <History class="w-5 h-5" />
                            <span class="font-bold font-heading">{{ $t('about.values.experience.title') }}</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">{{ $t('about.values.experience.desc') }}</p>
                    </div>
                    
                    <!-- Value 2 -->
                    <div class="glass p-8 rounded-3xl shadow-lg border border-white/60 dark:border-gray-700/60 flex flex-col items-start hover:-translate-y-1 transition-all bg-white/50 dark:bg-gray-800/50 md:mt-12" v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
                        <div class="inline-flex items-center space-x-3 bg-purple-50 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-2xl mb-6 transition-colors">
                            <ShieldCheck class="w-5 h-5" />
                            <span class="font-bold font-heading">{{ $t('about.values.trust.title') }}</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">{{ $t('about.values.trust.desc') }}</p>
                    </div>
                    
                    <!-- Value 3 -->
                    <div class="glass p-8 rounded-3xl shadow-lg border border-white/60 dark:border-gray-700/60 flex flex-col items-start hover:-translate-y-1 transition-all bg-white/50 dark:bg-gray-800/50" v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }">
                        <div class="inline-flex items-center space-x-3 bg-rose-50 dark:bg-rose-900 text-rose-700 dark:text-rose-300 px-4 py-2 rounded-2xl mb-6 transition-colors">
                            <HeartHandshake class="w-5 h-5" />
                            <span class="font-bold font-heading">{{ $t('about.values.care.title') }}</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">{{ $t('about.values.care.desc') }}</p>
                    </div>

                    <!-- Value 4 -->
                    <div class="glass p-8 rounded-3xl shadow-lg border border-white/60 dark:border-gray-700/60 flex flex-col items-start hover:-translate-y-1 transition-all bg-white/50 dark:bg-gray-800/50 md:mt-12" v-motion :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
                        <div class="inline-flex items-center space-x-3 bg-amber-50 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-4 py-2 rounded-2xl mb-6 transition-colors">
                            <Award class="w-5 h-5" />
                            <span class="font-bold font-heading">{{ $t('about.values.success.title') }}</span>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">{{ $t('about.values.success.desc') }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-24 bg-brand-900 relative overflow-hidden relative">
            <GradientBlob colorClass="from-brand-600 to-brand-800" positionClass="top-[50%] left-[50%] w-[800px] h-[800px] blur-[120px]" class="-translate-x-1/2 -translate-y-1/2 opacity-50" />
            
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                 v-motion
                 :initial="{ opacity: 0, y: 30 }"
                 :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                <h2 class="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                    {{ $t('cta.title') }}
                </h2>
                <p class="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                    {{ $t('cta.subtitle') }}
                </p>
                <Link href="/contact" class="inline-block px-10 py-5 rounded-full bg-white text-brand-900 font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
                    {{ $t('cta.button') }}
                </Link>
            </div>
        </section>
    </MainLayout>
</template>
