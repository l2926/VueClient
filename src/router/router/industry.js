const routes = [
    {
        path:'/industry/industry_list',
        name:'industryList',
        component: import('@/View/industry/IndustryListPage.vue')
    },{
        path:'/industry/fundamental',
        name:'fundamental',
        component:import('@/View/industry/FundamentalPage.vue')
    },{
        path:'/industry/fina_main',
        name:'fina_main',
        component:import('@/View/industry/FinaMainPage.vue')
    },{
        path:'/industry/top_hold',
        name:'top_hold',
        component: import('@/View/industry/TopHoldPage.vue')
    },{
        path:'/industry/ten_days',
        name:'ten_days',
        component: import('@/View/industry/TenDaysPage.vue')
    }
]

export default routes