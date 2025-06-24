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
    },{
        path:'/analysis/two_days_diff',
        name:'two_days_diff1',
        component: import('@/View/analysis/TwoDaysDiff.vue')
    },{
        path:'/analysis/five_days_limit',
        name:'five_days_limit1',
        component: import('@/View/analysis/FiveDaysLimit.vue')
    },{
        path:'/analysis/money_flow',
        name:'money_flow1',
        component: import('@/View/analysis/MoneyFlow.vue')
    },{
        path:'/analysis/money_flow_pct',
        name:'money_flow_pct1',
        component: import('@/View/analysis/MoneyFlowPct.vue')
    },{
        path:'/analysis/limit_board',
        name:'limit_board',
        component: import('@/View/analysis/LimitBoardPage.vue')
    }
]

export default routes