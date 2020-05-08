<template>
    <tr>
        <td>{{expense.name}}</td>
        <td>{{expense.date}}</td>
        <td>{{expense.category}}</td>
        <td>{{expense.method}}</td>
        <td>${{expense.value | decimalPlaces(2)}}</td>
        
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