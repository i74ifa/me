import { createApp } from 'vue'
// import VueRouter from 'vue-router';

import './app.css';

import router from './router.js';
import RootElement from './App.vue'
import { createMetaManager } from 'vue-meta'


// const metaManager = createMetaManager();

const app = createApp(RootElement)
app.use(router)
app.use(createMetaManager())
// app.use(metaPlugin)

app.config.globalProperties.$router = router
app.config.globalProperties.$page = {
    props: {
        dir: 'rtl',
        lang: 'ar',
    }
};


await router.isReady()
app.mount('#app')




