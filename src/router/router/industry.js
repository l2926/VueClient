const routes = [
    {
        path:'/industry/industry_list',
        name:'industryList',
        component: import('@/View/industry/IndustryListPage.vue')
    },{
        path:'/industry/fundamental',
        name:'fundamental',
        component:import('@/View/industry/FundamentalPage.vue')
    }
]

export default routes