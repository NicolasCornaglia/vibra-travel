import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import i18n from './i18n';
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(VueLazyload)
app.use(router)
app.use(i18n);

app.mount('#app')