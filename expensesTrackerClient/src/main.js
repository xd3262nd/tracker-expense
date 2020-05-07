import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'


import ExpenseAPIServie from '@/services/ExpenseService'

// Config Bootstrap
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Add API service to Vue prototype
Vue.prototype.$ExpenseService = ExpenseAPIServie

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
