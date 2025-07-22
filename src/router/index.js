
import {createRouter, createWebHashHistory} from "vue-router";
import marketRoutes from "@/router/router/market"
import industryRoutes from "@/router/router/industry"
import financeRoutes from "@/router/router/finance"
import indexRoutes from "@/router/router/index"
import analysis from "@/router/router/analysis";
import compare from "@/router/router/compare";

const routes=[
    ...marketRoutes,
    ...industryRoutes,
    ...financeRoutes,
    ...indexRoutes,
    ...analysis,
    ...compare,
    {
        path:'/',
        name:'home',
        component: () => import('@/View/QueryPage.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
});

export default router;