import { createApp } from 'vue'
// import VueRouter from 'vue-router';



import router from './router.js';
import RootElement from './App.vue'


const app = createApp(RootElement)
// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'حذيفة جابر';

app.config.globalProperties.$router = router
app.config.globalProperties.$page = {
    props: {
        dir: 'rtl',
        lang: 'ar',
    }
};

app.use(router)
app.mount('#app')





import './app.css';