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
    },{
        path:'/index/market_overview',
        name:'market_overview',
        component:  ()=>import('@/View/index/MarketOverview.vue')
    },{
        path:'/index/area_overview',
        name:'area_overview',
        component:  ()=>import('@/View/index/AreaOverview.vue')
    },{
        path:'/index/market_statistics',
        name:'market_statistics',
        component:()=>import('@/View/index/MarketStatistics.vue')
    },{
        path:'/index/hsgt_daily',
        name:'hsgt_daily',
        component:()=>import('@/View/index/HsgtDailyPage.vue')
    },{
        path:'/index/dc_index2',
        name:'dc_index2',
        component:()=>import('@/View/index/DcIndex2Page.vue')
    },{
        path:'/index/limit_cpt_list',
        name:'limit_cpt_list',
        component:()=>import('@/View/index/LimitCptListPage.vue')
    },{
        path:'/index/statistics_level_excel',
        name:'statistics_level_excel',
        component:()=>import('@/View/index/StatisticsLevelExcel.vue')
    },{
        path:'/index/statistics_level_all_excel',
        name:'statistics_level_all_excel',
        component:()=>import('@/View/index/StatisticsLevelAllExcel.vue')
    },{
        path:'/index/daily_overview',
        name:'index_daily_overview',
        component:()=>import('@/View/index/DailyMarketOverview.vue')
    },{
        path:'/index/week_overview',
        name:'index_week_overview',
        component:()=>import('@/View/index/WeekMarketOverview.vue')
    },{
        path:'/index/month_overview',
        name:'index_month_overview',
        component:()=>import('@/View/index/MonthMarketOverview.vue')
    },{
        path:'/index/season_overview',
        name:'index_season_overview',
        component:()=>import('@/View/index/SeasonMarketOverview.vue')
    },{
        path:'/index/year_overview',
        name:'index_year_overview',
        component:()=>import('@/View/index/YearMarketOverview.vue')
    }
]

export default routes