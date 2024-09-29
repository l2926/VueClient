const routes = [
    {
        path:'/market/daily',
        name:'daily',
        component: import('@/View/market/DailyPage.vue')
    },{
        path:'/market/subordinate',
        name:'subordinate',
        component: import('@/View/market/SubordinatePage.vue')
    }
]

export default routes