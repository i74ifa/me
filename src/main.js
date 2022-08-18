import { createApp } from 'vue'
// import VueRouter from 'vue-router';

import './app.css';

import router from './router.js';
import RootElement from './App.vue'

const app = createApp(RootElement)
// app.use(metaPlugin)

app.config.globalProperties.$router = router
app.config.globalProperties.$page = {
    props: {
        dir: 'rtl',
        lang: 'ar',
    }
};


app.use(router);
app.mount('#app')




