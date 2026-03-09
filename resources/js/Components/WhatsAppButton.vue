<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next';

const whatsappUrl = "https://web.whatsapp.com/send?phone=15148844933&text=Bienvenido(a)%20a%20Experience%20Canada";

</script>

<template>
    <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer"
       class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
       aria-label="Chat on WhatsApp">
        
        <!-- Pulse effect behind button -->
        <span class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        
        <MessageCircle class="w-8 h-8 relative z-10" />
        
        <!-- Tooltip -->
        <span class="absolute right-full mr-4 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {{ $t('nav.book_consultation') }}
        </span>
    </a>
</template>
