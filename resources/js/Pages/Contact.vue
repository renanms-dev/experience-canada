<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import MainLayout from '../Layouts/MainLayout.vue';
import GradientBlob from '../Components/GradientBlob.vue';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const form = useForm({
    name: '',
    email: '',
    phone: '',
    interest: 'study',
    message: ''
});

const submit = () => {
    // Basic prevent-default mock submission
    alert(t('contact.form.success'));
    form.reset();
};
</script>

<template>
    <Head :title="$t('meta.title_contact')" />
    <MainLayout>
        <!-- Hero Section -->
        <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-500">
            <GradientBlob colorClass="from-teal-200 to-emerald-200" positionClass="top-[10%] -left-[10%] w-[600px] h-[600px] blur-[100px]" />
            
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div class="max-w-3xl">
                    <div v-motion
                         :initial="{ opacity: 0, y: 30 }"
                         :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                        <span class="inline-block py-1.5 px-4 rounded-full bg-teal-50 dark:bg-teal-900 text-teal-700 dark:text-teal-400 font-semibold text-sm mb-6 border border-teal-100 dark:border-teal-800 uppercase tracking-wider transition-colors">
                            {{ $t('nav.contact') }}
                        </span>
                        <h1 class="text-5xl lg:text-7xl font-bold font-heading text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-8 transition-colors">
                            {{ $t('contact.hero.title') }}
                        </h1>
                        <p class="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed transition-colors">
                            {{ $t('contact.hero.desc') }}
                        </p>
                    </div>
                </div>

                <div class="hidden lg:block relative" 
                     v-motion 
                     :initial="{ opacity: 0, x: 30 }" 
                     :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }">
                    <div class="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
                    <img src="/images/hero_contact.png" alt="Contact ExperienceCanada" class="rounded-3xl shadow-2xl relative z-10 object-cover w-full h-[550px]" />
                </div>
            </div>
        </section>

        <!-- Contact Content Section -->
        <section class="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-500">
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <!-- Contact Info -->
                    <div v-motion
                         :initial="{ opacity: 0, x: -30 }"
                         :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }">
                        <h2 class="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-8 transition-colors">{{ $t('contact.info.title') }}</h2>
                        
                        <div class="space-y-8">
                            <div class="flex items-start">
                                <div class="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mr-6 transition-colors">
                                    <MapPin class="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors">{{ $t('contact.info.office') }}</h3>
                                    <p class="text-gray-600 dark:text-gray-300 transition-colors">Montreal, QC, Canada<br/>(Appointments only)</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mr-6 transition-colors">
                                    <Phone class="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors">{{ $t('contact.info.phone') }}</h3>
                                    <p class="text-gray-600 dark:text-gray-300 transition-colors">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mr-6 transition-colors">
                                    <Mail class="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors">{{ $t('contact.info.email') }}</h3>
                                    <p class="text-gray-600 dark:text-gray-300 transition-colors">info@experiencecanadaedu.com</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-900 flex items-center justify-center text-brand-600 dark:text-brand-400 shrink-0 mr-6 transition-colors">
                                    <Clock class="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors">{{ $t('contact.info.hours') }}</h3>
                                    <p class="text-gray-600 dark:text-gray-300 transition-colors">{{ $t('contact.info.hours_desc') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <div v-motion
                         :initial="{ opacity: 0, x: 30 }"
                         :visible-once="{ opacity: 1, x: 0, transition: { duration: 800 } }"
                         class="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden transition-colors">
                        
                        <!-- Decorative blob inside form -->
                        <div class="absolute -top-24 -right-24 w-48 h-48 bg-brand-50 dark:bg-brand-900 rounded-full blur-3xl opacity-60 pointer-events-none transition-colors"></div>

                        <h2 class="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-8 relative z-10 transition-colors">{{ $t('contact.form.title') }}</h2>
                        
                        <form @submit.prevent="submit" class="space-y-6 relative z-10">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">{{ $t('contact.form.name') }}</label>
                                    <input v-model="form.name" type="text" required
                                        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-brand-500 dark:focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800 outline-none transition-all bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-700">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">{{ $t('contact.form.email') }}</label>
                                    <input v-model="form.email" type="email" required
                                        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-brand-500 dark:focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800 outline-none transition-all bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-700">
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">{{ $t('contact.form.phone') }}</label>
                                    <input v-model="form.phone" type="tel"
                                        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-brand-500 dark:focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800 outline-none transition-all bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-700">
                                </div>
                                <div>
                                    <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">{{ $t('contact.form.interest') }}</label>
                                    <select v-model="form.interest"
                                        class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-brand-500 dark:focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800 outline-none transition-all bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-700 appearance-none cursor-pointer">
                                        <option value="study">{{ $t('nav.study') }}</option>
                                        <option value="immigrate">{{ $t('nav.immigrate') }}</option>
                                        <option value="other">{{ $t('contact.form.interest_other') }}</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors">{{ $t('contact.form.message') }}</label>
                                <textarea v-model="form.message" rows="4" required
                                    class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-brand-500 dark:focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-800 outline-none transition-all bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:bg-white dark:focus:bg-gray-700 resize-none"></textarea>
                            </div>

                            <button type="submit" class="w-full py-4 rounded-xl bg-gray-900 hover:bg-black dark:bg-brand-600 dark:hover:bg-brand-700 text-white font-bold text-lg transition-all shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:-translate-y-1">
                                {{ $t('contact.form.submit') }}
                                <Send class="w-5 h-5 ml-2" />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>

    </MainLayout>
</template>
