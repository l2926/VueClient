
import {createRouter, createWebHashHistory} from "vue-router";
import marketRoutes from "@/router/router/market"
import industryRoutes from "@/router/router/industry"
import financeRoutes from "@/router/router/finance"
import indexRoutes from "@/router/router/index"

const routes=[
    ...marketRoutes,
    ...industryRoutes,
    ...financeRoutes,
    ...indexRoutes,
    {
        path:'/',
        name:'home',
        component:import('@/View/QueryPage.vue')
    },{
        path:'/analysis/limit',
        name:'limit',
        component: import('@/View/analysis/LimitPage.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;