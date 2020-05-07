<template>

    <div>
        <!--TODO Error message here -->

        <div class="card m-2 p-2">
            <h2 class="card-title">Add New Expenses</h2>

            <!-- Form starts here -->
            <!-- Name -->
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="name">Transaction Name: </label>
                <div class="col-sm-10">
            
                    <input id="name" class="form-control" v-model.trim="newTransactionName">
                </div>
            </div>

            <!-- Date -->
            <div class="form-group row">
                
                <label class="col-sm-2 col-form-label" for="when">Date of Transaction: </label>

                <div class="col-sm-10">
                    <input id="when" class="form-control" type="date" v-model.lazy="when" >
                </div>
            </div>

            <!-- Category -->
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="category">Category: </label>

                <div class="col-sm-10">
                    <select class="form-control" v-model="category">
                        <option disabled value="">Please select one</option>
                        <option v-for="category in categories" v-bind:value="category" >{{category}}</option> 
                    </select>
                </div>
            </div>

            <!-- Method -->
            <div class="form-group row">
                <label for="category" class="col-sm-2 col-form-label">Method: </label>

                <div class="col-sm-10">
                    <select class="form-control" v-model="method">
                        <option disabled value="">Please select one</option>
                        <option v-for="method in methods" v-bind:value="method" >{{method}}</option> 
                    </select>
                </div>
            </div>

            <!-- Value -->
            <div class="form-group row">
                <label for="value" class="col-sm-2 col-form-label">Amount: </label>

                <div class="col-sm-10 input-group">

                    <input 
                    type="text" 
                    id="value" 
                    class="form-control" 
                    v-model="validateAmount" 
                    @blur="isInputActive = false" 
                    @focus="isInputActive = true">
                
                </div>
                
            </div>

            <!-- ! This is the button section -->
            <button class="btn btn-primary" v-on:click.prevent="addExpense">Add</button>

        </div>
    </div>

                

    
</template>

<script>
export default {
    name: 'NewExpenseForm',
    mounted() {
        this.getCategories()
        this.getMethods()

    },
    data() {
        return{
            categories: [],
            newTransactionName:'',
            category: '',
            when: '',
            value: '',
            numValue:null,
            methods: [],
            method: '',
            isInputActive: false,
            errors: [],


        }
    },
    methods: {
        getCategories() {
            this.$ExpenseService.getCategories().then(data => {
                this.categories = data
            })
        },
        getMethods() {
            this.$ExpenseService.getMethods().then(data => {
                this.methods = data
            })
        },
        addExpense(){
            this.errors = []
            if(this.newTransactionName && this.category && this.value && this.method && this.when){
                let expense = {
                    name: this.newTransactionName,
                    category: this.category,
                    value: this.value,
                    method: this.method,
                    date: this.when
                }
                // emit message to parent with info about new expense.
                this.$emit('new-expense', expense);
                this.newTransactionName = ''
                this.category = ''
                this.when = ''
                this.value = ''
                this.method = ' '
            }

        }

    },
    computed: {
        validateAmount: {
            get: function() {
                if(this.isInputActive){
                    // Cursor is inside the input field. unformat display value for user
                    
                    return this.value.toString()
                } else {
                    // User is not modifying now. Format display value for user interface
                    return "$ " + (Math.round(this.value * 100) / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
                }
            },
            set: function(modifiedValue){
                // Recalculate value after ignoring "$" and "," in user input
                let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
                 // Ensure that it is not NaN
                if (isNaN(newValue)) {
                newValue = 0
                }
                this.value = newValue
                
            }

        }

    }

}
</script>

<style scoped>
.input-group-addon{
    font-size:24px;
    
}

</style>