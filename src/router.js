import Welcome from './Pages/Welcome.vue';
import Websites from './Pages/Websites.vue';
import { createRouter, createWebHistory } from 'vue-router';
import data from './data';

const routes = [
    {
        name: 'home',
        meta: {
            title: 'مطور مواقع',
            meta: {
                title: 'حذيفة جابر - مطور مواقع',
                description: data.aboutMe.desc,
            }
        },
        path: '/',
        component: Welcome,
    },
    {
        name: 'websites',
        meta: {
            title: 'مواقع مفضلة',
            meta: {
                title: 'مواقع مميزة لتطوير الويب',
                description: data.websites.meta.description,
                'twitter:card': 'summary_large_image',
                'twitter:site': '@i74ifa',
                'twitter:creator': '@i74ifa',
                'twitter:title': 'مواقع مميزة تساعدك في تصميم المواقع والتطبيقات',
                'twitter:description': data.websites.meta.description,
                'twitter:image': data.websites.meta.image
            }
        },
        path: '/websites',
        component: Websites
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    
    routes,
})



// router.beforeEach((to, from, next) => {
//     // console.log(to.meta);
//     document.title = `${data.aboutMe.name} - ${to.meta.title}`
//     for (const [key, value] of Object.entries(to.meta.meta)) {
//         let meta = document.createElement('meta');
//         meta.name = key;
//         meta.content = value
//         document.head.appendChild(meta)
//     }
    
//     return next()
// })

export default router;