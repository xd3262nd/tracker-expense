<template>

<div>
    <body>
        <div class="card-body">
            <div class="container">
                <h1 class="card-title">Monthly Snapshot</h1>
                <p class="card-text text-muted">An Overview of Your Monthly Expenses in a PieChart</p>
                
            </div>
        </div>

        <div class="searchForm">
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
    name: "Search",
    components:{
        PieChart
    },
    data() {
        return{
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
                'January' : '01',
                'February' : '02',
                'March' : '03',
                'April' : '04',
                'May' : '05',
                'June' : '06',
                'July' : '07',
                'August' : '08',
                'September' : '09',
                'October' : '10',
                'November' : '11',
                'December' : '12'
            },
            
        }
    },
    mounted(){
        this.options = {
            hoverBorderWidth: 20,
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                    }
                }
            },
            responsive: true,
            legend: {
                position:'bottom'
            }

            
        }
        this.getDate()


    },
    methods: {
        getDate() {
            // TODO Need to figure out how to refresh the year options when new expenses added
            this.$ExpenseService.getAllExpenses().then( expenses => {
                this.expenses = expenses

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
                this.dateData = allDates
            })
        },
        getMonth(monthList){
            for( let i in this.monthObject){
                if (monthList.includes(this.monthObject[i])){
                    this.months.push(i)
                }
            }
        },
        generateRandomColor(dataLength){
            let colorsArray = []
            while (colorsArray.length <= dataLength){
                // Generate random red, blue, green
                let red = Math.floor(Math.random() * 255)
                let blue = Math.floor(Math.random() * 255)
                let green = Math.floor(Math.random() * 255)
                // Create a color using rgb(r, g, b) format
                let randomColor = `rgb(${red}, ${green}, ${blue})`
                colorsArray.push(randomColor)
            }
            return colorsArray


        },
        getExpenses(year, month) {
            // Store key and value of categories and amount spent for that categories
            let tmpData = {};
            let total = 0;
            let chartObj = {};


            this.expenses.forEach( function (el, index){
                if(el.date.split('-')[0] ==  year && el.date.split('-')[1] == month){
                    if (!tmpData.hasOwnProperty(el.category)){
                        tmpData[el.category] = el.value
                        console.log(tmpData)
                    }else{
                        let tmpValue = tmpData[el.category]
                        tmpData[el.category] = tmpValue + el.value
                        console.log(tmpData)
                    }
                }
            })

            // Calculation and put them into the chartData
            for (let i in tmpData){
                    total = parseFloat(total) + parseFloat(tmpData[i])
            }

            // Iterate each key value pairs
            for ( let el in tmpData ){
                    // Calculation 
                    let proportion = ((parseFloat(tmpData[el])/parseFloat(total)) * 100).toFixed(2)
                    console.log(proportion)
                    chartObj[el] = proportion
            }
            let colors = this.generateRandomColor(Object.keys(chartObj).length)

            this.expensesChartData = {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                labels: Object.keys(chartObj),
                datasets: [
                    {
                     label: "Expenses",
                     backgroundColor: colors,
                     data: Object.values(chartObj) //TODO: need to display in a percentage instead of plain number

                    }
                ]
            }
            



            console.log(this.expensesChartData)
            this.dataLoaded = true


        
        }

    
    },
    watch: {
        year: function(year){
            let tmpList = []
            this.months = []      

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

                
        },
        month: function(month, year){
            console.log(this.month, this.year)

            let selectedMonth = this.monthObject[this.month]
            console.log(selectedMonth) //print the number of month

            // pass the search requirments to the function that get all expneses and filter it
            this.getExpenses(this.year, selectedMonth)

        }
    }

    
}
</script>

<style scoped>
.searchForm {
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.container{
    text-align: center;
}

</style>