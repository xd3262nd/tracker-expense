<template>

    <div>
        <NewExpenseForm v-on:new-expense="newExpenseAdded"></NewExpenseForm>
        <ExpenseTable v-bind:expenses="expenses" v-on:delete-expense="deleteExpense"></ExpenseTable>


    </div>
</template>

<script>
import NewExpenseForm from './NewExpenseForm.vue'
import ExpenseTable from './ExpenseTable.vue'

export default {
    name: 'ExpenseUI',
    components: {
    NewExpenseForm, ExpenseTable
  },
  data() {
    return{
      expenses: [],
      message: ''
    }

  },
  mounted(){
      this.updateExpense()
  },
  methods: {
    newExpenseAdded(expense) {
      this.$ExpenseService.addExpense(expense).then( expense => {
        this.updateExpense()
      }).catch( err => {
        let msg = err.response.data.join(', ')
        alert('Error adding new expense.\n' + msg)
      })
    },
    updateExpense() {
      this.$ExpenseService.getAllExpenses().then( expenses => {
        this.expenses = expenses
      })
    },
    // deleteExpense(){
    //     this.$ExpenseService.
    // }
  

    }
  }
</script>