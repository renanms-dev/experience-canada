<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Head, Link } from '@inertiajs/vue3';
import MainLayout from '../Layouts/MainLayout.vue';
import SectionTitle from '../Components/SectionTitle.vue';
import FeatureCard from '../Components/FeatureCard.vue';
import GradientBlob from '../Components/GradientBlob.vue';
import PartnerLogos from '../Components/PartnerLogos.vue';
import TestimonialSection from '../Components/TestimonialSection.vue';
import FaqSection from '../Components/FaqSection.vue';
import { 
    GraduationCap, 
    Plane, 
    Globe, 
    Award, 
    Users, 
    Briefcase,
    ArrowRight,
    CheckCircle, // Changed from CheckCircle2
    Building2,   // New icon
    MapPin       // New icon
} from 'lucide-vue-next';

defineProps<{
    canLogin?: boolean;
    canRegister?: boolean;
    laravelVersion?: string;
    phpVersion?: string;
}>();

const { t } = useI18n();

const stats = computed(() => [
    { value: '+7', label: t('stats.years') },
    { value: '+9', label: t('stats.cities') },
    { value: '100%', label: t('stats.satisfaction') },
    { value: '2017', label: t('stats.founded') },
]);

const features = computed(() => [
    t('why_us.bullet1'),
    t('why_us.bullet2'),
    t('why_us.bullet3'),
    t('why_us.bullet4'),
]);

const heroHeadlines = computed(() => [
    { 
        tag: t('hero.badge'), 
        main: t('hero.title1'),
        desc: t('hero.desc1'),
        image: "/images/hero/hero_student_canada_1772859620195.png",
        floatingTitle: t('hero.floating1_title'),
        floatingSubtitle: t('hero.floating1_subtitle')
    },
    { 
        tag: t('hero.tag2'), 
        main: t('hero.title2'),
        desc: t('hero.desc2'),
        image: "/images/hero/hero_professional_canada_1772859632976.png",
        floatingTitle: t('hero.floating2_title'),
        floatingSubtitle: t('hero.floating2_subtitle')
    },
    { 
        tag: t('hero.tag3'), 
        main: t('hero.title3'),
        desc: t('hero.desc3'),
        image: "/images/hero/hero_family_canada_1772859647498.png",
        floatingTitle: t('hero.floating3_title'),
        floatingSubtitle: t('hero.floating3_subtitle')
    }
]);
const currentHeadlineIndex = ref(0);

onMounted(() => {
    const interval = setInterval(() => {
        currentHeadlineIndex.value = (currentHeadlineIndex.value + 1) % heroHeadlines.value.length;
    }, 10000);
    onUnmounted(() => {
        clearInterval(interval);
    });
});
</script>

<template>
    <Head :title="$t('meta.title_home')" />
    
    <MainLayout>
        <!-- Background Effects -->
        <GradientBlob positionClass="-top-40 -left-40 w-96 h-96" colorClass="bg-brand-300" />
        <GradientBlob positionClass="top-20 -right-20 w-[30rem] h-[30rem]" colorClass="bg-accent-200" />
        
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                     <div v-motion
                         :initial="{ opacity: 0, x: -50 }"
                         :enter="{ opacity: 1, x: 0, transition: { duration: 800, type: 'spring' } }">
                        
                        <div class="h-10 mb-4 flex items-center">
                            <transition name="fade-slide" mode="out-in">
                                <div :key="currentHeadlineIndex" class="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 dark:bg-gray-800 text-brand-700 dark:text-brand-400 font-medium text-sm border border-brand-100 dark:border-gray-700 shadow-sm whitespace-nowrap transition-colors">
                                    <Plane class="w-4 h-4 mr-2" />
                                    {{ heroHeadlines[currentHeadlineIndex].tag }}
                                </div>
                            </transition>
                        </div>

                        <div class="min-h-[140px] lg:min-h-[180px] mb-2">
                            <transition name="fade-slide" mode="out-in">
                                <h1 :key="currentHeadlineIndex" class="text-5xl lg:text-7xl font-bold font-heading text-gray-900 dark:text-white leading-[1.1] tracking-tight transition-colors">
                                    {{ heroHeadlines[currentHeadlineIndex].main }} <br/><span class="text-gradient">{{ $t('hero.canada') }}</span>
                                </h1>
                            </transition>
                        </div>
                        
                        <div class="min-h-[80px] mb-8">
                            <transition name="fade-slide" mode="out-in">
                                <p :key="currentHeadlineIndex" class="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed transition-colors">
                                    {{ heroHeadlines[currentHeadlineIndex].desc }}
                                </p>
                            </transition>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link href="/contact" class="px-8 py-4 rounded-full bg-brand-600 text-white font-semibold text-lg hover:bg-brand-700 transition-all transform hover:scale-105 shadow-xl hover:shadow-brand-500/40 flex items-center justify-center">
                                {{ $t('hero.button_start') }}
                                <ArrowRight class="w-5 h-5 ml-2" />
                            </Link>
                            <Link href="/study" class="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-lg border border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-500 hover:bg-brand-50 dark:hover:bg-gray-700 transition-all shadow-sm flex items-center justify-center">
                                {{ $t('hero.button_view') }}
                            </Link>
                        </div>
                    </div>
                    
                    <div class="relative lg:-mr-12"
                         v-motion
                         :initial="{ opacity: 0, scale: 0.9 }"
                         :enter="{ opacity: 1, scale: 1, transition: { duration: 1000, delay: 200 } }">
                        <div class="absolute inset-0 bg-gradient-to-tr from-brand-100 to-accent-50 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>
                        
                        <div class="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                            <transition name="fade" mode="in-out">
                                <img :key="currentHeadlineIndex" 
                                     :src="heroHeadlines[currentHeadlineIndex].image" 
                                     class="absolute inset-0 w-full h-full object-cover" 
                                     alt="Canada Experience" />
                            </transition>
                        </div>
                        
                        <!-- Floating Card -->
                        <div v-motion
                             :initial="{ y: 50, opacity: 0 }"
                             :enter="{ y: 0, opacity: 1, transition: { delay: 600, duration: 800 } }"
                             class="absolute -bottom-8 -left-8 glass rounded-2xl p-6 shadow-2xl max-w-xs animate-bounce" style="animation-duration: 3s;">
                            <transition name="fade-slide" mode="out-in">
                                <div :key="currentHeadlineIndex" class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0 transition-colors">
                                        <CheckCircle class="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p class="font-bold text-gray-900 dark:text-white transition-colors">{{ heroHeadlines[currentHeadlineIndex].floatingTitle }}</p>
                                        <p class="text-sm text-gray-600 dark:text-gray-400 transition-colors">{{ heroHeadlines[currentHeadlineIndex].floatingSubtitle }}</p>
                                    </div>
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Partner Logos Section -->
        <PartnerLogos />

        <!-- Services Section -->
        <section id="services" class="py-24 relative bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-500">
            <GradientBlob positionClass="top-40 right-0 w-[40rem] h-[40rem]" colorClass="bg-brand-200" />

            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionTitle 
                    :title="$t('services.title')" 
                    :subtitle="$t('services.subtitle')"
                    centered 
                />
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    <FeatureCard 
                        :title="$t('services.study.title')"
                        :description="$t('services.study.desc')"
                        :icon="GraduationCap"
                        colorClass="bg-blue-50 text-blue-600"
                        :delay="100"
                        href="/study"
                    />
                    
                    <FeatureCard 
                        :title="$t('services.work.title')"
                        :description="$t('services.work.desc')"
                        :icon="Briefcase"
                        colorClass="bg-purple-50 text-purple-600"
                        :delay="200"
                        href="/immigrate"
                    />
                    
                    <FeatureCard 
                        :title="$t('services.pr.title')"
                        :description="$t('services.pr.desc')"
                        :icon="Plane"
                        colorClass="bg-rose-50 text-rose-600"
                        :delay="300"
                        href="/contact"
                    />
                </div>
            </div>
        </section>

        <!-- Why Choose Us -->
        <section class="py-24 bg-white dark:bg-gray-800 relative overflow-hidden transition-colors duration-500">
            <GradientBlob positionClass="bottom-0 left-0 w-[40rem] h-[40rem]" colorClass="bg-accent-100" />
            
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div v-motion
                         :initial="{ opacity: 0, x: -50 }"
                         :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                        <SectionTitle 
                            :title="$t('why_us.title')" 
                            :subtitle="$t('why_us.subtitle')"
                        />
                        
                        <ul class="space-y-6 mt-8">
                            <li v-for="(feature, index) in features" :key="index" class="flex items-start">
                                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400 flex items-center justify-center mt-1 mr-4 transition-colors">
                                    <CheckCircle class="w-4 h-4" />
                                </div>
                                <p class="text-lg text-gray-700 dark:text-gray-300 transition-colors">{{ feature }}</p>
                            </li>
                        </ul>
                        
                        <div class="mt-12">
                            <a href="#testimonials" class="inline-flex px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl items-center">
                                {{ $t('why_us.button') }}
                                <ArrowRight class="w-5 h-5 ml-2" />
                            </a>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-6"
                         v-motion
                         :initial="{ opacity: 0, x: 50 }"
                         :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" class="rounded-3xl shadow-lg mt-12 w-full h-64 object-cover" alt="Campus" />
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" class="rounded-3xl shadow-lg w-full h-64 object-cover" alt="Consultation" />
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="py-12 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 relative z-20 transition-colors duration-500">
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="(stat, index) in stats" :key="index"
                         v-motion
                         :initial="{ opacity: 0, y: 20 }"
                         :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
                         class="text-center">
                        <div class="text-4xl md:text-5xl font-bold font-heading text-brand-600 dark:text-brand-400 mb-2 transition-colors">{{ stat.value }}</div>
                        <div class="text-gray-600 dark:text-gray-300 font-medium transition-colors">{{ stat.label }}</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <TestimonialSection />

        <!-- FAQ Section -->
        <FaqSection />

        <!-- CTA Section -->
        <section class="py-24 relative overflow-hidden bg-brand-900">
            <!-- Decorative background elements -->
            <div class="absolute inset-0 opacity-10">
                <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40V0H40" fill="none" stroke="white" stroke-width="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>
            
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
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

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.5s ease-in-out;
}
.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(15px);
}
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-15px);
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
