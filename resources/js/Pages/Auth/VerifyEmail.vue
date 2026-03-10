<script setup>
import { computed } from 'vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const props = defineProps({
    status: {
        type: String,
    },
});

const form = useForm({});

const submit = () => {
    form.post(route('verification.send'));
};

const verificationLinkSent = computed(
    () => props.status === 'verification-link-sent',
);
</script>

<template>
    <GuestLayout>
        <Head :title="$t('auth.verify_email_title')" />

        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            {{ $t('auth.verify_email_desc') }}
        </div>

        <div
            class="mb-4 text-sm font-medium text-brand-600 dark:text-brand-400"
            v-if="verificationLinkSent"
        >
            {{ $t('auth.verify_email_success') }}
        </div>

        <form @submit.prevent="submit">
            <div class="mt-4 flex items-center justify-between">
                <PrimaryButton
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    {{ $t('auth.resend_verification_email') }}
                </PrimaryButton>

                <Link
                    :href="route('logout')"
                    method="post"
                    as="button"
                    class="rounded-md text-sm text-gray-600 dark:text-gray-400 underline hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200"
                    >{{ $t('auth.log_out') }}</Link
                >
            </div>
        </form>
    </GuestLayout>
</template>
