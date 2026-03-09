<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Quote } from 'lucide-vue-next';

const { t } = useI18n();
</script>

<template>
    <section id="testimonials" class="py-24 bg-brand-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16" 
                 v-motion
                 :initial="{ opacity: 0, y: 30 }"
                 :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                <h2 class="text-brand-600 dark:text-brand-400 font-bold tracking-wide uppercase text-sm mb-3">
                    {{ $t('testimonials.badge') }}
                </h2>
                <h3 class="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 transition-colors">
                    {{ $t('testimonials.title') }}
                </h3>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors">
                    {{ $t('testimonials.subtitle') }}
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div v-motion
                     :initial="{ opacity: 0, y: 30 }"
                     :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 100 } }"
                     class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative group hover:-translate-y-2 transition-transform duration-300">
                    <Quote class="absolute top-8 right-8 w-12 h-12 text-brand-100 dark:text-gray-700 group-hover:text-brand-200 dark:group-hover:text-brand-900 transition-colors" />
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-14 h-14 rounded-full bg-brand-200 dark:bg-brand-900 flex items-center justify-center text-brand-700 dark:text-brand-300 font-bold text-xl">
                            M
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-900 dark:text-white">Maria S.</h4>
                            <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('testimonials.student1.role') }}</p>
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                        "{{ $t('testimonials.student1.text') }}"
                    </p>
                </div>

                <!-- Testimonial 2 -->
                <div v-motion
                     :initial="{ opacity: 0, y: 30 }"
                     :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
                     class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative group hover:-translate-y-2 transition-transform duration-300">
                    <Quote class="absolute top-8 right-8 w-12 h-12 text-brand-100 dark:text-gray-700 group-hover:text-brand-200 dark:group-hover:text-brand-900 transition-colors" />
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-14 h-14 rounded-full bg-blue-200 dark:bg-blue-900 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-xl">
                            C
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-900 dark:text-white">Carlos M.</h4>
                            <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('testimonials.student2.role') }}</p>
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                        "{{ $t('testimonials.student2.text') }}"
                    </p>
                </div>

                <!-- Testimonial 3 -->
                <div v-motion
                     :initial="{ opacity: 0, y: 30 }"
                     :visible-once="{ opacity: 1, y: 0, transition: { duration: 800, delay: 300 } }"
                     class="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative group hover:-translate-y-2 transition-transform duration-300">
                    <Quote class="absolute top-8 right-8 w-12 h-12 text-brand-100 dark:text-gray-700 group-hover:text-brand-200 dark:group-hover:text-brand-900 transition-colors" />
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-14 h-14 rounded-full bg-rose-200 dark:bg-rose-900 flex items-center justify-center text-rose-700 dark:text-rose-300 font-bold text-xl">
                            A
                        </div>
                        <div>
                            <h4 class="font-bold text-gray-900 dark:text-white">Ana P.</h4>
                            <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('testimonials.student3.role') }}</p>
                        </div>
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                        "{{ $t('testimonials.student3.text') }}"
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
