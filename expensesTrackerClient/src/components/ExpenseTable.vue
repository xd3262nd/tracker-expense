<template>


    <div>
        <div class="card expense-list m-2 p-2">
            <h4 class="card-title">Expense History</h4>

            <div class="edit-table-toggle form-check">
            
                

            </div>

            <div id="expense-table">
                <table class="table">
                    <tr>
                        <th>Expense Name</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Method</th>
                        <th>Amount</th>
                    </tr>

                    <ExpenseRow v-for="expense in expenses" v-bind:key="expense.name" v-bind:expense="expense" ></ExpenseRow>
                    

                </table>
            </div>
        </div>
    </div>
    
</template>

<script>

import ExpenseRow from '@/components/ExpenseRow.vue'

export default {
    name: 'ExpenseTable',
    components: {ExpenseRow},
    data() {
        return{

        }
    },
    props:{
        expenses: Array
    },
    methods: {

    }

}
</script>

<style scoped>

</style>