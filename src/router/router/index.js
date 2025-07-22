const routes = [
    {
        path:'/index/index_list',
        name:'index',
        component:  ()=>import('@/View/index/IndexListPage.vue')
    },{
        path:'/index/index_daily',
        name:'IndexDaily',
        component:  ()=>import('@/View/index/IndexDailyPage.vue')
    },{
        path:'/index/statistics',
        name:'Statistics',
        component:  ()=>import('@/View/index/StatisticsDailyPage.vue')
    },{
        path:'/index/statistics_mv',
        name:'StatisticsMv',
        component:  ()=>import('@/View/index/StatisticsMvPage.vue')
    },{
        path:'/index/statistics_all',
        name:'StatisticsAll',
        component:  ()=>import('@/View/index/StatisticsAllPage.vue')
    },{
        path:'/index/kpl_concept',
        name:'KplConcept',
        component:  ()=>import('@/View/index/KplConceptPage.vue')
    },{
        path:'/index/kpl_concept_cons',
        name:'KplConceptCons',
        component:  ()=>import('@/View/index/KplConceptConsPage.vue')
    },{
        path:'/index/dc_index',
        name:'DcIndex',
        component:  ()=>import('@/View/index/DcIndexPage.vue')
    },{
        path:'/index/dc_member',
        name:'DcMember',
        component:  ()=>import('@/View/index/DcMemberPage.vue')
    },{
        path:'/index/fina_main2',
        name:'FinaMain2Member',
        component:  ()=>import('@/View/index/FinaMain2Page.vue')
    },{
        path:'/index/fina_main3',
        name:'FinaMain3Member',
        component:  ()=>import('@/View/index/FinaMain3Page.vue')
    },{
        path:'/index/company_info',
        name:'CompanyInfo',
        component:  ()=>import('@/View/index/CompanyInfoPage.vue')
    },{
        path:'/index/five_days_limit',
        name:'five_days_limit_index',
        component:  ()=>import('@/View/index/FiveDaysLimit.vue')
    },{
        path:'/index/money_flow',
        name:'money_flow_index',
        component:  ()=>import('@/View/index/MoneyFlow.vue')
    },{
        path:'/index/money_flow_pct',
        name:'money_flow_pct_index',
        component:  ()=>import('@/View/index/MoneyFlowPct.vue')
    },{
        path:'/index/ten_days',
        name:'ten_days_index',
        component:  ()=>import('@/View/index/TenDaysPage.vue')
    }
]

export default routes