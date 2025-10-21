import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import PrimeVue from 'primevue/config';
import Theme from '@primevue/themes/aura';

import Toast from "primevue/toast";
import DatePicker from 'primevue/datepicker';
import ConfirmDialog from 'primevue/confirmdialog';
import ConfirmPopup from "primevue/confirmpopup";
import Select from 'primevue/select';
import Popover from 'primevue/popover';
import Tooltip from 'primevue/tooltip';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';

import router from './router';

import "./assets/styles/index.css";

async function initApp() {
    const app = createApp(App);

    app.use(createPinia())

    app.use(PrimeVue, {
        theme: {
            preset: Theme,
            options: {
                darkModeSelector: '.dark',
                cssLayer: {
                    name: 'primevue',
                    order: 'theme, base, primevue'
                }               
            }        
        },
        ripple: true
    });
    app.use(router);
    app.use(ConfirmationService);
    app.use(ToastService);
    app.directive('tooltip', Tooltip);
    app.directive('ripple', Ripple);
    app.component("Toast", Toast);
    app.component('DatePicker', DatePicker);
    app.component('ConfirmDialog', ConfirmDialog);
    app.component("ConfirmPopup", ConfirmPopup);
    app.component('Select', Select);
    app.component('Popover', Popover);

    await useSettingsStore().loadSettings();

    app.mount('#app');
}

initApp();