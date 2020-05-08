import Router from 'vue-router'

import ExpenseUI from '@/components/ExpenseUI'


export default new Router({
    routes: [
        {
            path: '/',
            component: ExpenseUI
        },
       
    ]
})