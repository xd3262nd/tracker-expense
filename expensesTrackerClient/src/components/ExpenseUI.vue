<template>

    <div>
        <NewExpenseForm v-on:new-expense="newExpenseAdded"></NewExpenseForm>
        <ExpenseTable v-bind:expenses="expenses" v-on:delete-expense="deleteExpense"></ExpenseTable>


    </div>
</template>

<script>
import NewExpenseForm from './NewExpenseForm.vue'
import ExpenseTable from './ExpenseTable.vue'
import { required, minLength } from "vuelidate/lib/validators"

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
        // API call to add expenses
      this.$ExpenseService.addExpense(expense)
      .then( expense => {

        this.updateExpense()

      })
      .catch( err => {
        let msg = err.response.data.join(', ')
        alert('Error adding new expense.\n' + msg)
      })
    },
    updateExpense() {
        // API call to reload all the expenses data
        this.$ExpenseService.getAllExpenses().then( expenses => {

            this.expenses = expenses
        })
    },
    deleteExpense(expense){
        this.$ExpenseService.deleteExpense(expense.id).then( () => {
            this.updateExpense()
        })
    }
  

    }
  }
</script>