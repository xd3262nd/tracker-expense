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

                <div class="col-sm-10" >
                    <select class="form-control" v-model="month" >
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
            monthData: [],
            monthObject:{
                'Jan' : '01',
                'Feb' : '02',
                'Mar' : '03',
                'Apr' : '04',
                'May' : '05',
                'Jun' : '06',
                'Jul' : '07',
                'Aug' : '08',
                'Sep' : '09',
                'Oct' : '10',
                'Nov' : '11',
                'Dec' : '12'
            },
            
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
            // TODO Need to figure out how to refresh the year options when new expenses added
            this.$ExpenseService.getAllExpenses().then( expenses => {
                let yearList = [];
                let allDates = [];


                expenses.forEach(function(element, index){
                    let tmp = element.date
                    let dateList = element.date.split('-')
                    if (!yearList.includes(dateList[0])){
                        yearList.push(dateList[0])
                        yearList.sort( function (s1, s2){
                            return s1 > s2 ? 1 : -1
                        })
                    }
                    allDates.push(element.date)

                })
                this.years = yearList
                console.log(this.years)
                console.log(allDates)
                this.dateData = allDates
            })
        },
        getMonth(monthList){
            console.log(monthList)
            let tmpMonthObject = this.monthObject
            tmpMonthObject.forEach( function (el) {
                if (monthList.includes(tmpMonthObject[el])) {
                    console.log(tmpMonthObject[el])
                }
            })

        }
    
    },
    watch: {
        year: function(year){
            let tmpList = []      

            this.dateData.forEach(function (el, index){          
                if (el.split('-')[0] == year){
                    let tmpMonth = el.split('-')[1]
                    if (!tmpList.includes(tmpMonth)){
                        tmpList.push(tmpMonth)
                        tmpList.sort (function (s1, s2){
                            return s1 > s2 ? 1 : -1
                        })
                    }
                    
                }
            })
            
            this.getMonth(tmpList)

                
        }
    }
    
}
</script>

<style scoped>

</style>