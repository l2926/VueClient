const routes = [
    {
        path:'/finance/finance_list',
        name:'finance',
        component:  ()=>import('@/View/finance/FinanceListPage.vue')
    },{
        path:'/finance/finance_overview',
        name:'finance_overview',
        component:  ()=>import('@/View/finance/FinanceOverviewPage.vue')
    },{
        path:'/finance/finance_history',
        name:'finance_history',
        component:()=>import('@/View/finance/FinanceHistoryPage.vue')
    }
]

export default routes