<script setup lang="ts">
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const openIndex = ref<number | null>(0);

const toggleTheme = (index: number) => {
    openIndex.value = openIndex.value === index ? null : index;
};

// Array of translation keys for the FAQs
const faqs = [
    { questionKey: 'faqs.q1.q', answerKey: 'faqs.q1.a' },
    { questionKey: 'faqs.q2.q', answerKey: 'faqs.q2.a' },
    { questionKey: 'faqs.q3.q', answerKey: 'faqs.q3.a' },
    { questionKey: 'faqs.q4.q', answerKey: 'faqs.q4.a' },
];
</script>

<template>
    <section class="py-24 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-500">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div class="text-center mb-16"
                 v-motion
                 :initial="{ opacity: 0, y: 30 }"
                 :visible-once="{ opacity: 1, y: 0, transition: { duration: 800 } }">
                <h2 class="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 transition-colors">
                    {{ $t('faqs.title') }}
                </h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 transition-colors">
                    {{ $t('faqs.subtitle') }}
                </p>
            </div>

            <div class="space-y-4">
                <div v-for="(faq, index) in faqs" :key="index"
                     v-motion
                     :initial="{ opacity: 0, x: -20 }"
                     :visible-once="{ opacity: 1, x: 0, transition: { duration: 500, delay: index * 100 } }"
                     class="border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 overflow-hidden hover:border-brand-300 dark:hover:border-brand-500 transition-colors">
                    
                    <button @click="toggleTheme(index)" 
                            class="w-full text-left px-6 py-5 flex justify-between items-center bg-transparent focus:outline-none">
                        <span class="font-bold text-gray-900 dark:text-white pr-8">{{ $t(faq.questionKey) }}</span>
                        <ChevronDown 
                            class="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 shrink-0"
                            :class="{ 'rotate-180 text-brand-600 dark:text-brand-400': openIndex === index }" 
                        />
                    </button>
                    
                    <div class="overflow-hidden transition-all duration-300 ease-in-out"
                         :class="openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'">
                        <div class="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700 mt-2 pt-4 transition-colors">
                            {{ $t(faq.answerKey) }}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
