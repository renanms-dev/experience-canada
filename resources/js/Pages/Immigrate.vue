<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '../Layouts/MainLayout.vue';
import SectionTitle from '../Components/SectionTitle.vue';
import FeatureCard from '../Components/FeatureCard.vue';
import GradientBlob from '../Components/GradientBlob.vue';
import { ArrowRight, Plane, Briefcase, Users, FileCheck } from 'lucide-vue-next';

</script>

<template>
    <Head :title="$t('meta.title_immigrate')" />
    <MainLayout>
        <!-- Hero Section - Authoritative Split -->
        <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-900">
            <div class="absolute inset-0 z-0">
                <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
                <div class="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/95 to-brand-900/70"></div>
            </div>

            <GradientBlob colorClass="from-rose-500/10 to-orange-500/10" positionClass="top-[10%] -left-[10%] w-[800px] h-[800px] blur-[120px]" />
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div class="order-2 lg:order-1 hidden lg:block relative" 
                     v-motion 
                     :initial="{ opacity: 0, x: -30 }" 
                     :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }">
                    <div class="absolute inset-0 bg-gradient-to-bl from-rose-500/20 to-transparent rounded-3xl transform -translate-x-4 translate-y-4"></div>
                    <img src="/images/hero_immigrate.png" alt="Immigrate to Canada" class="rounded-3xl shadow-2xl relative z-10 object-cover w-full h-[550px] border border-white/10" />
                </div>

                <div class="order-1 lg:order-2 max-w-3xl">
                    <div v-motion
                         :initial="{ opacity: 0, x: 30 }"
                         :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                        <span class="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-rose-500/10 text-rose-200 font-semibold text-sm mb-6 border border-rose-500/20 uppercase tracking-wider backdrop-blur-sm">
                            <span class="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
                            <span>{{ $t('nav.immigrate') }}</span>
                        </span>
                        <h1 class="text-5xl lg:text-7xl font-bold font-heading text-white leading-[1.1] tracking-tight mb-8">
                            {{ $t('immigrate.hero.title') }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">{{ $t('immigrate.hero.canada') }}</span>
                        </h1>
                        <p class="text-xl text-brand-100 mb-10 leading-relaxed">
                            {{ $t('immigrate.hero.desc') }}
                        </p>
                        <Link href="/contact" class="inline-flex px-8 py-4 rounded-full bg-white text-brand-900 font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] items-center justify-center">
                            {{ $t('immigrate.hero.button') }}
                            <ArrowRight class="w-5 h-5 ml-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Alternating Rows Section -->
        <section class="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle 
                    :title="$t('immigrate.services.title')" 
                    :subtitle="$t('immigrate.services.subtitle')"
                    centered 
                />
                
                <div class="mt-20 space-y-24">
                    <!-- Service 1 -->
                    <div class="grid lg:grid-cols-2 gap-12 items-center" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                        <div class="order-2 lg:order-1">
                            <div class="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-6 shadow-sm transition-colors">
                                <Plane class="w-8 h-8" />
                            </div>
                            <h3 class="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4 transition-colors">{{ $t('immigrate.services.express.title') }}</h3>
                            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors">{{ $t('immigrate.services.express.desc') }}</p>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400 flex items-center justify-center mt-1 mr-4 transition-colors">
                                        <ArrowRight class="w-4 h-4" />
                                    </div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium transition-colors">Federal Skilled Worker</span>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400 flex items-center justify-center mt-1 mr-4 transition-colors">
                                        <ArrowRight class="w-4 h-4" />
                                    </div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium transition-colors">Canadian Experience Class</span>
                                </li>
                            </ul>
                        </div>
                        <div class="order-1 lg:order-2 relative h-80 lg:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" alt="Express Entry" class="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>

                    <!-- Service 2 -->
                    <div class="grid lg:grid-cols-2 gap-12 items-center" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                        <div class="relative h-80 lg:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" alt="Work Permits" class="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div>
                            <div class="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 shadow-sm transition-colors">
                                <Briefcase class="w-8 h-8" />
                            </div>
                            <h3 class="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4 transition-colors">{{ $t('immigrate.services.work.title') }}</h3>
                            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors">{{ $t('immigrate.services.work.desc') }}</p>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400 flex items-center justify-center mt-1 mr-4 transition-colors">
                                        <ArrowRight class="w-4 h-4" />
                                    </div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium transition-colors">LMIA Supported Offers</span>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400 flex items-center justify-center mt-1 mr-4 transition-colors">
                                        <ArrowRight class="w-4 h-4" />
                                    </div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium transition-colors">PGWP & Open Work Permits</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Service 3 -->
                    <div class="grid lg:grid-cols-2 gap-12 items-center" v-motion :initial="{ opacity: 0, y: 30 }" :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                        <div class="order-2 lg:order-1">
                            <div class="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 shadow-sm transition-colors">
                                <Users class="w-8 h-8" />
                            </div>
                            <h3 class="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-4 transition-colors">{{ $t('immigrate.services.family.title') }}</h3>
                            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 transition-colors">{{ $t('immigrate.services.family.desc') }}</p>
                            <ul class="space-y-4">
                                <li class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400 flex items-center justify-center mt-1 mr-4 transition-colors">
                                        <ArrowRight class="w-4 h-4" />
                                    </div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium transition-colors">Spousal Sponsorship</span>
                                </li>
                                <li class="flex items-start">
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400 flex items-center justify-center mt-1 mr-4 transition-colors">
                                        <ArrowRight class="w-4 h-4" />
                                    </div>
                                    <span class="text-gray-700 dark:text-gray-300 font-medium transition-colors">Parents & Grandparents</span>
                                </li>
                            </ul>
                        </div>
                        <div class="order-1 lg:order-2 relative h-80 lg:h-[400px] rounded-3xl overflow-hidden shadow-xl">
                            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1000" alt="Family Sponsorship" class="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <!-- CTA Section with Tags -->
        <section class="py-24 bg-brand-900 relative overflow-hidden relative border-t border-white/10">
            <GradientBlob colorClass="from-brand-600 to-brand-800" positionClass="top-[50%] left-[50%] w-[800px] h-[800px] blur-[120px]" class="-translate-x-1/2 -translate-y-1/2 opacity-50" />
            
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                 v-motion
                 :initial="{ opacity: 0, y: 30 }"
                 :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                
                <div class="flex justify-center gap-4 mb-8">
                    <span class="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">RCIC Certified</span>
                    <span class="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20">Trusted Advisors</span>
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                    {{ $t('cta.title') }}
                </h2>
                <p class="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                    {{ $t('cta.subtitle') }}
                </p>
                <Link href="/contact" class="inline-block px-10 py-5 rounded-full bg-white text-brand-900 font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                    {{ $t('cta.button') }}
                </Link>
            </div>
        </section>
    </MainLayout>
</template>
