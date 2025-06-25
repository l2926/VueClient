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
    },{
        path:'/index/statistics_all',
        name:'StatisticsAll',
        component: import('@/View/index/StatisticsAllPage.vue')
    },{
        path:'/index/kpl_concept',
        name:'KplConcept',
        component: import('@/View/index/KplConceptPage.vue')
    },{
        path:'/index/kpl_concept_cons',
        name:'KplConceptCons',
        component: import('@/View/index/KplConceptConsPage.vue')
    }
]

export default routes