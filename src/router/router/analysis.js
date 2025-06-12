const routes = [
    {
        path:'/analysis/limit',
        name:'limit',
        component: import('@/View/analysis/LimitPage.vue')
    },{
        path:'/analysis/company_info',
        name:'company_info_analysis',
        component: import('@/View/analysis/CompanyInfoPage.vue')
    },{
        path:'/analysis/fina_main',
        name:'fina_main_analysis',
        component: import('@/View/analysis/FinaMainPage.vue')
    },
    {
        path:'/analysis/fina_main2',
        name:'fina_main_analysis2',
        component: import('@/View/analysis/FinaMain2Page.vue')
    },
    {
        path:'/analysis/fina_main3',
        name:'fina_main_analysis3',
        component: import('@/View/analysis/FinaMain3Page.vue')
    },{
        path:'/analysis/top_hold',
        name:'top_hold2',
        component: import('@/View/analysis/TopHoldPage.vue')
    },{
        path:'/analysis/ten_days',
        name:'ten_days2',
        component: import('@/View/analysis/TenDaysPage.vue')
    },{
        path:'/analysis/top100',
        name:'top100',
        component: import('@/View/analysis/Top100Page.vue')
    }
]

export default routes