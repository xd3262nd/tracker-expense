import Router from 'vue-router'

import ExpenseUI from './components/ExpenseUI.vue'


export default new Router({
    routes: [
        {
            path: '/',
            component: ExpenseUI
        },
       
    ]
})