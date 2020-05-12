import Router from 'vue-router'

import ExpenseUI from '../components/ExpenseUI.vue'
import ExpenseSearch from '../components/ExpenseSearch.vue'


export default new Router({
    routes: [
        {
            path: '/',
            component: ExpenseUI
        },
        {
            path:'/Snapshot',
            component: ExpenseSearch
        }
        
       
    ]
})