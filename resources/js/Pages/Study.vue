<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '../Layouts/MainLayout.vue';
import SectionTitle from '../Components/SectionTitle.vue';
import FeatureCard from '../Components/FeatureCard.vue';
import GradientBlob from '../Components/GradientBlob.vue';
import { ArrowRight, GraduationCap, BookOpen, School, Building2 } from 'lucide-vue-next';

</script>

<template>
    <Head :title="$t('meta.title_study')" />
    <MainLayout>
        <!-- Hero Section - Centered Immersive -->
        <section class="relative pt-32 pb-32 lg:pt-48 lg:pb-40 overflow-hidden bg-brand-900 border-b-8 border-brand-500">
            <!-- Background Image with Overlay -->
            <div class="absolute inset-0 z-0">
                <img src="/images/hero_study.png" alt="Study in Canada" class="w-full h-full object-cover object-center opacity-30 mix-blend-overlay" />
                <div class="absolute inset-0 bg-gradient-to-b from-brand-900/80 via-brand-900/60 to-brand-900"></div>
            </div>

            <GradientBlob colorClass="from-blue-400 to-cyan-400" positionClass="top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] blur-[120px] opacity-30" />
            
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div v-motion
                     :initial="{ opacity: 0, scale: 0.95, y: 30 }"
                     :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 1000, type: 'spring' } }">
                    
                    <div class="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-white/10 text-brand-50 font-semibold text-sm mb-8 border border-white/20 uppercase tracking-wider backdrop-blur-md">
                        <GraduationCap class="w-4 h-4" />
                        <span>{{ $t('nav.study') }}</span>
                    </div>
                    
                    <h1 class="text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] tracking-tight mb-8">
                        {{ $t('study.hero.title') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">{{ $t('study.hero.canada') }}</span>
                    </h1>
                    
                    <p class="text-xl text-brand-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                        {{ $t('study.hero.desc') }}
                    </p>
                    
                    <Link href="/contact" class="inline-flex px-10 py-4 rounded-full bg-white text-brand-900 font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl items-center justify-center">
                        {{ $t('study.hero.button') }}
                        <ArrowRight class="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>

        <!-- Journey / Timeline Section -->
        <section class="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle 
                    :title="$t('study.programs.title')" 
                    :subtitle="$t('study.programs.subtitle')"
                    centered 
                />
                
                <div class="mt-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
                    
                    <!-- Item 1 -->
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mt-12 mb-12">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                            <BookOpen class="w-5 h-5" />
                        </div>
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:-translate-y-1 transition-all bg-white/50 dark:bg-gray-800/50" v-motion :initial="{ opacity: 0, x: -30 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: 100 } }">
                            <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 transition-colors">{{ $t('study.programs.language.title') }}</h3>
                            <p class="text-gray-600 dark:text-gray-300 transition-colors">{{ $t('study.programs.language.desc') }}</p>
                        </div>
                    </div>
                    
                    <!-- Item 2 -->
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                            <School class="w-5 h-5" />
                        </div>
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:-translate-y-1 transition-all bg-white/50 dark:bg-gray-800/50" v-motion :initial="{ opacity: 0, x: 30 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }">
                            <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 transition-colors">{{ $t('study.programs.highschool.title') }}</h3>
                            <p class="text-gray-600 dark:text-gray-300 transition-colors">{{ $t('study.programs.highschool.desc') }}</p>
                        </div>
                    </div>
                    
                    <!-- Item 3 -->
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                            <Building2 class="w-5 h-5" />
                        </div>
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:-translate-y-1 transition-all bg-white/50 dark:bg-gray-800/50" v-motion :initial="{ opacity: 0, x: -30 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: 300 } }">
                            <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 transition-colors">{{ $t('study.programs.college.title') }}</h3>
                            <p class="text-gray-600 dark:text-gray-300 transition-colors">{{ $t('study.programs.college.desc') }}</p>
                        </div>
                    </div>

                    <!-- Item 4 -->
                    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-gray-800 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                            <GraduationCap class="w-5 h-5" />
                        </div>
                        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50 hover:-translate-y-1 transition-all bg-white/50 dark:bg-gray-800/50" v-motion :initial="{ opacity: 0, x: 30 }" :visible-once="{ opacity: 1, x: 0, transition: { duration: 800, delay: 400 } }">
                            <h3 class="font-bold text-xl text-gray-900 dark:text-white mb-2 transition-colors">{{ $t('study.programs.university.title') }}</h3>
                            <p class="text-gray-600 dark:text-gray-300 transition-colors">{{ $t('study.programs.university.desc') }}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-white dark:bg-gray-800 relative overflow-hidden transition-colors duration-500">
            <GradientBlob colorClass="from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40" positionClass="top-[50%] left-[50%] w-[600px] h-[600px] blur-[80px]" class="-translate-x-1/2 -translate-y-1/2 opacity-70" />
            
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                 v-motion
                 :initial="{ opacity: 0, scale: 0.95 }"
                 :visible-once="{ opacity: 1, scale: 1, transition: { duration: 800 } }">
                
                <div class="glass border border-white/60 dark:border-gray-700/60 rounded-3xl p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/40 dark:bg-gray-800/60 transition-colors duration-500">
                    <h2 class="text-3xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
                        {{ $t('cta.title') }}
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto transition-colors">
                        {{ $t('cta.subtitle') }}
                    </p>
                    <Link href="/contact" class="inline-flex px-10 py-5 rounded-full bg-brand-600 text-white font-bold text-lg hover:bg-brand-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-brand-500/30 items-center">
                        {{ $t('cta.button') }}
                        <ArrowRight class="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    </MainLayout>
</template>
