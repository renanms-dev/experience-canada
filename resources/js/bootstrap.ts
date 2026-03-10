import axios from 'axios';

declare global {
    interface Window {
        axios: typeof axios;
    }
}

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const savedLocale = localStorage.getItem('locale') || 'es';
window.axios.defaults.headers.common['X-Locale'] = savedLocale;

export {};
