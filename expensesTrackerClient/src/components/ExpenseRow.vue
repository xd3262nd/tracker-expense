<template>
    <tr>
        <td>{{expense.name}}</td>
        <td>{{expense.date}}</td>
        <td>{{expense.category}}</td>
        <td>{{expense.method}}</td>
        <td>${{expense.value | decimalPlaces(2)}}</td>
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteExpense(expense)" src="@/assets/delete-icon.png">
        </td>
        
    </tr>
</template>

<script>
export default {
    name: 'ExpenseRow',
    props: {
        expense: Object,
        edit: Boolean
    },
    methods: {
        deleteExpense(expense) {
            if(confirm(`Delete ${expense.name}, are you sure?`)){
                this.$emit('delete-expense', expense)
            }
            
        }
    },
    filters: {
        decimalPlaces: function(value, decimalPlaces){
            return value.toFixed(decimalPlaces)
        }
    }
}
</script>


<style>

</style>