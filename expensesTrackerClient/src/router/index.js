import Router from 'vue-router'

import ExpenseUI from '../components/ExpenseUI.vue'
import ExpenseSearch from '../components/ExpenseSearch.vue'
import ModifyExpense from '../components/ExpenseModify.vue'


export default new Router({
    routes: [
        {
            path: '/',
            component: ExpenseUI
        },
        {
            path:'/Snapshot',
            component: ExpenseSearch
        },
        {
            path:'/Modify',
            component: ModifyExpense
        }
       
    ]
})