const routes = [
    {
        path:'/market/daily',
        name:'daily',
        component: import('@/View/market/DailyPage.vue')
    },{
        path:'/market/subordinate',
        name:'subordinate',
        component: import('@/View/market/SubordinatePage.vue')
    },{
        path:'/market/finance_center',
        name: 'finance_center',
        component: import('@/View/market/FinanceCenterPage.vue')
    },{
        path:'/market/asset_center',
        name: 'asset_center',
        component: import('@/View/market/AssetCenterPage.vue')
    },{
        path:'/market/log_daily',
        name: 'log_daily',
        component: import('@/View/market/LogDailyPage.vue')
    },{
        path:'/market/money_flow',
        name: 'money_flow_market',
        component: import('@/View/market/MoneyFlowPage.vue')
    }
]

export default routes