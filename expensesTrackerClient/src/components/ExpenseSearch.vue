<template>

<div>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1>Monthly Snapshot</h1>
                <p>Description: TODO HERE</p>
                
            </div>

            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="year">Year: </label>

                <div class="col-sm-10" >
                    <select class="form-control" v-model="year" >
                        <option disabled value="">Please select one</option>
                        <option v-for="year in years" v-bind:key="year" v-bind:value="year" >{{year}}</option> 
                    </select>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="category">Month: </label>

                <div class="col-sm-10" v-model="month">
                    <select class="form-control" >
                        <option disabled value="">Please select one</option>
                        <option v-for="month in months" v-bind:key="month" v-bind:value="month" >{{month}}</option> 
                    </select>
                </div>
            </div>
            



        </div>
    </body>


    <PieChart  v-if="dataLoaded" v-bind:chartData="expensesChartData" v-bind:options="options"></PieChart>
</div>


    
</template>

<script>

import PieChart from "./ExpenseGraph.vue"

export default {
    name: 'Search',
    components:{
        PieChart
    },
    data() {
        return{
            expensesData: [],
            expensesChartData: {},
            options: {},
            dataLoaded: false,
            years: [],
            months: [],
            expenses: [],
            year: '',
            month: '',
            dateData: [],
            allData: [],
            
        }
    },
    mounted(){
        this.options = {
            hoverBorderWidth: 20,
        }
        // this.loadExpenseData(),
        this.getDate()


    },
    methods: {
        getDate() {

            this.$ExpenseService.getAllExpenses().then( expenses => {
                let yearList = [];
                let dateList = [];

                expenses.forEach(function(element, index){  
                    let tmp = element.date
                    console.log(String(tmp))
                    let dateList = element.date.split('-')
                    if (!yearList.includes(dateList[0])){
                        yearList.push(dateList[0])
                        yearList.sort( function (s1, s2){
                            return s1 > s2 ? 1 : -1
                        })
                    }
                    dateList.push('hi')

                })
                this.years = yearList
                console.log(dateList)
            })


        },
        




    }
    
}
</script>

<style scoped>

</style>