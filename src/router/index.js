
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/market/daily',
        name:'daily',
        component: import('@/View/market/DailyPage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;