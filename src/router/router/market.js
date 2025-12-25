const routes = [
    {
        path:'/market/daily',
        name:'daily',
        component:  ()=>import('@/View/market/DailyPage.vue')
    },{
        path:'/market/subordinate',
        name:'subordinate',
        component:  ()=>import('@/View/market/SubordinatePage.vue')
    },{
        path:'/market/finance_center',
        name: 'finance_center',
        component:  ()=>import('@/View/market/FinanceCenterPage.vue')
    },{
        path:'/market/asset_center',
        name: 'asset_center',
        component:  ()=>import('@/View/market/AssetCenterPage.vue')
    },{
        path:'/market/log_daily',
        name: 'log_daily',
        component:  ()=>import('@/View/market/LogDailyPage.vue')
    },{
        path:'/market/money_flow',
        name: 'money_flow_market',
        component:  ()=>import('@/View/market/MoneyFlowPage.vue')
    },{
        path:'/market/top_hold',
        name: 'top_hold_market',
        component:  ()=>import('@/View/market/TopHoldPage.vue')
    },{
        path:'/market/fina_mian',
        name: 'fina_main_market',
        component:  ()=>import('@/View/market/FinaMainPage.vue')
    },{
        path:'/market/fina_mian2',
        name: 'fina_main2_market',
        component:  ()=>import('@/View/market/FinaMain2Page.vue')
    },{
        path:'/market/fina_mian3',
        name: 'fina_main3_market',
        component:  ()=>import('@/View/market/FinaMain3Page.vue')
    },{
        path:'/market/company_info',
        name: 'company_info_market',
        component:  ()=>import('@/View/market/ComponyInfoPage.vue')
    }
]

export default routes