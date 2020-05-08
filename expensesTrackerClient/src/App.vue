<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView>

    <!-- <NewExpenseForm v-on:new-expense="newExpenseAdded"></NewExpenseForm>
    <ExpenseTable v-bind:expenses="expenses"></ExpenseTable> -->
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import NewExpenseForm from '@/components/NewExpenseForm.vue'
// import ExpenseTable from './components/ExpenseTable.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return{
      expenses: [],
      message: ''
    }

  },
  methods: {
    // newExpenseAdded(expense) {
    //   this.$ExpenseService.addExpense(expense).then( expense => {
    //     this.updateExpense()
    //   }).catch( err => {
    //     let msg = err.response.data.join(', ')
    //     alert('Error adding new expense.\n' + msg)
    //   })
    // },
    // updateExpense() {
    //   this.$ExpenseService.getAllExpenses().then( expenses => {
    //     this.expenses = expenses
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
