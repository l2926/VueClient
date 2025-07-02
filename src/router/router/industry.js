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
        path:'/industry/fina_main2',
        name:'fina_main2',
        component:import('@/View/industry/FinaMain2Page.vue')
    },{
        path:'/industry/fina_main3',
        name:'fina_main3',
        component:import('@/View/industry/FinaMain3Page.vue')
    },{
        path:'/industry/top_hold',
        name:'top_hold',
        component: import('@/View/industry/TopHoldPage.vue')
    },{
        path:'/industry/two_days_diff',
        name:'two_days_diff2',
        component: import('@/View/industry/TwoDaysDiff.vue')
    },{
        path:'/industry/ten_days',
        name:'ten_days',
        component: import('@/View/industry/TenDaysPage.vue')
    },{
        path:'/industry/company_info',
        name:'company_info',
        component:import('@/View/industry/ComponyInfoPage.vue')
    },{
        path:'/industry/five_days_limit',
        name:'five_days_limit2',
        component: import('@/View/industry/FiveDaysLimit.vue')
    },{
        path:'/industry/money_flow',
        name:'money_flow2',
        component: import('@/View/industry/MoneyFlow.vue')
    },{
        path:'/industry/money_flow_pct',
        name:'money_flow_pct2',
        component: import('@/View/industry/MoneyFlowPct.vue')
    }
]

export default routes