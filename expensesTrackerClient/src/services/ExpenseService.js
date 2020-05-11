import axios from 'axios'

const base_url = '/api/expenses'

export default {
    getAllExpenses() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },

    addExpense(expense) {
        return axios.post(base_url, expense).then( response => {
            return response.data
        })
    },
    getCategories() {
        return axios.get('/api/categories').then( response => {
            return response.data
        })
    },
   getMethods() {
       return axios.get('/api/methods').then( response => {
           return response.data
       })
   },
   deleteExpense(id) {
       return axios.delete('/api/')
   }
}