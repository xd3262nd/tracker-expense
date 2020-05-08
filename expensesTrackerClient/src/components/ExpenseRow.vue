<template>
    <tr>
        <td>{{expense.name}}</td>
        <td>{{expense.date}}</td>
        <td>{{expense.category}}</td>
        <td>{{expense.method}}</td>
        <td>{{expense.value}}</td>
        
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
        
    }
}
</script>


<style>

</style>