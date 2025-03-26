const routes = [
    {
        path:'/analysis/limit',
        name:'limit',
        component: import('@/View/analysis/LimitPage.vue')
    },{
        path:'/analysis/fina_main',
        name:'fina_main2',
        component: import('@/View/analysis/FinaMainPage.vue')
    },{
        path:'/analysis/top_hold',
        name:'top_hold2',
        component: import('@/View/analysis/TopHoldPage.vue')
    },{
        path:'/analysis/ten_days',
        name:'ten_days2',
        component: import('@/View/analysis/TenDaysPage.vue')
    }
]

export default routes