import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';

Vue.use(VueFilterDateParse);

import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

// Import VueRouter library, and this app's routes
import router from './router'


import ExpenseAPIServie from '@/services/ExpenseService'

// Config Bootstrap
Vue.use(BootstrapVue)

// Use VueRouter
Vue.use(VueRouter)

Vue.use(Vuelidate)



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Add API service to Vue prototype
Vue.prototype.$ExpenseService = ExpenseAPIServie

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
