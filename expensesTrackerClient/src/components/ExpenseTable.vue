<template>


    <div>
        <div class="card expense-list m-2 p-2">
            <h2 class="card-title">Expense History</h2>

            <div class="edit-table-toggle form-check">
            
                
            <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
            <label for="edit-table" class="form-check-label">Edit Table?</label>
            </div>

            <div id="expense-table">
                <table class="table">
                    <tr>
                        <th>Expense Name</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Method</th>
                        <th>Amount</th>
                        <th v-show="editTable">Delete</th>
                    </tr>

                    <ExpenseRow v-for="expense in expenses" v-bind:key="expense.name" v-bind:expense="expense" v-bind:edit="editTable" v-on:delete-expense="deleteExpense" ></ExpenseRow>
                    

                </table>
            </div>
        </div>
    </div>
    
</template>

<script>

import ExpenseRow from '@/components/ExpenseRow.vue'

export default {
    name: 'ExpenseTable',
    components: {
        ExpenseRow
    },
    data() {
        return{
            editTable: false,
        }
    },
    props:{
        expenses: Array
    },
    methods: {
        deleteExpense(expense) {
            this.$emit('delete-expense', expense)
        }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap');

h2{
    font-family: 'Inconsolata', monospace;
}

</style>