const routes = [
    {
        path:'/index/index_list',
        name:'index',
        component: import('@/View/index/IndexListPage.vue')
    },{
        path:'/index/index_daily',
        name:'IndexDaily',
        component: import('@/View/index/IndexDailyPage.vue')
    },{
        path:'/index/statistics',
        name:'Statistics',
        component: import('@/View/index/StatisticsDailyPage.vue')
    }
]

export default routes