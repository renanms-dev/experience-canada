<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { Link, usePage } from '@inertiajs/vue3';
import { Menu, X, Globe, Sun, Moon } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import WhatsAppButton from '../Components/WhatsAppButton.vue';

interface User {
    id: number;
    name: string;
    email: string;
}

const page = usePage<{ auth: { user: User | null } }>();
const { t, locale } = useI18n();
const isMenuOpen = ref(false);
const isDark = ref(false);

const navigation = computed(() => [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.study'), href: '/study' },
    { name: t('nav.immigrate'), href: '/immigrate' },
    { name: t('nav.about'), href: '/about' },
]);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const updateLocale = (lang: string) => {
    locale.value = lang;
    localStorage.setItem('locale', lang);
    if (window.axios) {
        window.axios.defaults.headers.common['X-Locale'] = lang;
    }
};

onMounted(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true;
    } else {
        isDark.value = false;
    }
});

const toggleDark = () => {
    isDark.value = !isDark.value;
};

watch(isDark, (newValue) => {
    if (newValue) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
});
</script>

<template>
    <div class="min-h-screen bg-transparent flex flex-col font-sans relative overflow-hidden">
        <!-- Navigation Bar -->
        <nav class="fixed w-full z-50 glass dark:border-gray-800 transition-all duration-300">
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-20 items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <Link href="/" class="text-2xl font-bold font-heading text-brand-800 dark:text-brand-400">
                            {{ $t('footer.brand') }}<span class="text-accent-600 dark:text-accent-400">{{ $t('footer.accent') }}</span>
                        </Link>
                    </div>
                    
                    <!-- Desktop Menu -->
                    <div class="hidden lg:flex items-center space-x-3 xl:space-x-6">
                        <a v-for="item in navigation" :key="item.name" :href="item.href"
                            class="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors whitespace-nowrap text-sm xl:text-base">
                            {{ item.name }}
                        </a>
                        <div class="flex items-center text-sm font-medium">
                            <Globe class="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                            <select :value="locale" @change="updateLocale(($event.target as HTMLSelectElement).value)" class="bg-transparent text-gray-700 dark:text-gray-200 font-semibold focus:outline-none focus:ring-0 border-none cursor-pointer hover:text-brand-600 dark:hover:text-brand-400 transition-colors pl-0 pr-7 py-2 text-left w-auto">
                                <option value="en" class="text-gray-900">EN</option>
                                <option value="es" class="text-gray-900">ES</option>
                                <option value="fr" class="text-gray-900">FR</option>
                            </select>
                        </div>
                        
                        <button @click="toggleDark" class="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle Dark Mode">
                            <Sun v-if="isDark" class="w-5 h-5" />
                            <Moon v-else class="w-5 h-5" />
                        </button>

                        <div v-if="$page.props.auth.user" class="flex items-center border-l pl-3 xl:pl-5 border-gray-200 dark:border-gray-700">
                             <Link href="/dashboard" class="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors whitespace-nowrap text-sm xl:text-base">
                                {{ $t('nav.dashboard') }}
                            </Link>
                        </div>
                        <div v-else class="flex items-center space-x-3 border-l pl-3 xl:pl-5 border-gray-200 dark:border-gray-700">
                             <Link href="/login" class="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium whitespace-nowrap transition-colors text-sm xl:text-base">
                                {{ $t('nav.login') }}
                            </Link>
                            <Link href="/register" class="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 font-medium whitespace-nowrap transition-colors text-sm xl:text-base">
                                {{ $t('nav.register') }}
                            </Link>
                        </div>
                        
                        <Link href="/contact" class="bg-brand-600 hover:bg-brand-700 text-white px-4 xl:px-5 py-2 xl:py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-brand-500/30 whitespace-nowrap text-sm xl:text-base">
                            {{ $t('nav.book_consultation') }}
                        </Link>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="flex items-center space-x-2 lg:hidden">
                        <button @click="toggleDark" class="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors p-2 rounded-full">
                            <Sun v-if="isDark" class="w-5 h-5" />
                            <Moon v-else class="w-5 h-5" />
                        </button>
                        <button @click="toggleMenu" class="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors p-2">
                            <Menu v-if="!isMenuOpen" class="w-6 h-6" />
                            <X v-else class="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div v-show="isMenuOpen" v-motion-fade class="lg:hidden glass-dark dark:bg-gray-900 absolute w-full left-0 origin-top">
                <div class="px-4 pt-2 pb-6 space-y-2 shadow-xl border-t border-gray-700">
                    <a v-for="item in navigation" :key="item.name" :href="item.href"
                        @click="isMenuOpen = false"
                        class="block px-3 py-3 text-base text-gray-200 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium">
                        {{ item.name }}
                    </a>
                    <div class="flex items-center px-4 py-3 text-base text-gray-200 font-medium bg-gray-900/50 rounded-lg relative">
                        <Globe class="w-5 h-5 mr-3 text-gray-400" />
                        <select :value="locale" @change="updateLocale(($event.target as HTMLSelectElement).value); isMenuOpen = false" class="bg-transparent text-white w-full focus:outline-none focus:ring-0 border-none cursor-pointer pl-0 pr-9 text-left">
                            <option value="en" class="text-gray-900">English</option>
                            <option value="es" class="text-gray-900">Español</option>
                            <option value="fr" class="text-gray-900">Français</option>
                        </select>
                    </div>

                    <div v-if="$page.props.auth.user" class="border-t border-gray-700 pt-2 pb-1 space-y-1">
                        <Link href="/dashboard" @click="isMenuOpen = false"
                            class="block px-3 py-3 text-base text-gray-200 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium">
                            {{ $t('nav.dashboard') }}
                        </Link>
                    </div>
                    <div v-else class="border-t border-gray-700 pt-2 pb-1 space-y-1">
                        <Link href="/login" @click="isMenuOpen = false"
                            class="block px-3 py-3 text-base text-gray-200 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium">
                            {{ $t('nav.login') }}
                        </Link>
                        <Link href="/register" @click="isMenuOpen = false"
                            class="block px-3 py-3 text-base text-gray-200 hover:text-white hover:bg-gray-800 rounded-lg transition-colors font-medium">
                            {{ $t('nav.register') }}
                        </Link>
                    </div>
                    <div class="pt-4">
                        <Link href="/contact" @click="isMenuOpen = false" class="block text-center w-full bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all">
                            {{ $t('nav.book_consultation') }}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="flex-grow pt-20 relative z-10 w-full">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-gray-900 border-t border-gray-800 pt-16 pb-8 relative z-20">
            <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div class="col-span-1 md:col-span-2">
                        <Link href="/" class="text-2xl font-bold font-heading text-white mb-4 block">
                            {{ $t('footer.brand') }}<span class="text-accent-500">{{ $t('footer.accent') }}</span>
                        </Link>
                        <p class="text-gray-400 max-w-sm">
                            {{ $t('footer.desc') }}
                        </p>
                    </div>
                    <div>
                        <h3 class="text-white font-heading font-semibold mb-4">{{ $t('footer.links') }}</h3>
                        <ul class="space-y-3">
                            <li v-for="item in navigation" :key="item.name">
                                <a :href="item.href" class="text-gray-400 hover:text-brand-400 transition-colors">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-white font-heading font-semibold mb-4">{{ $t('footer.contact') }}</h3>
                        <ul class="space-y-3 text-gray-400">
                            <li>info@experiencecanadaedu.com</li>
                            <li>+1 (514) 884-4933</li>
                            <li>Montreal, QC, Canada</li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    &copy; 2026 {{ $t('footer.brand') }}{{ $t('footer.accent') }}. {{ $t('footer.rights') }}
                </div>
            </div>
        </footer>
        
        <!-- Global WhatsApp Button -->
        <WhatsAppButton />
    </div>
</template>
