<template>

    <div>
        <!-- Error message here -->
        <!-- <div class="alert alert-danger" v-show="errors.length > 0 ">
            <li v-for="error in errors" v-bind:key="error">{{error}}</li>
        </div>  -->

        <div class="card m-2 p-2">
            <h2 class="card-title">Add New Expenses</h2>
           

            <!-- Form starts here -->
            <!-- Name -->
            <div class="form-group row" >
                <label class="col-sm-2 col-form-label" for="name">Transaction Name: </label>
                <div class="col-sm-10">
            
                    <input id="name" class="form-control"  type="text" data-parsley-minlength="4" v-model.trim="$v.newTransactionName.$model" :class="{'is-invalid':$v.newTransactionName.$error, 'is-valid':!$v.newTransactionName.$invalid}" >
                    <div class="valid-feedback"></div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.newTransactionName.required">Transaction Name is required.</span>
                        <span v-if="!$v.newTransactionName.minLength">Transaction Name must have at least {{$v.newTransactionName.$params.minLength.min}} letter.</span>
                    </div>
                </div>
            
                
            </div>

            <!-- Date -->
            <div class="form-group row">
                
                <label class="col-sm-2 col-form-label" for="when">Date of Transaction: </label>

                <div class="col-sm-10">
                    <input id="when" class="form-control" type="date" v-model.lazy="$v.when.$model" :class="{'is-invalid':$v.when.$error, 'is-valid':!$v.when.$invalid}"  >
                    <div class="valid-feedback"></div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.when.required">Transaction Date is required.</span>
                        <span v-if="!$v.when.maxValue">Transaction Date must not be further than {{today | shortDateFormat }}</span>
                    </div>
                </div>
            </div>

            <!-- Value -->
            <div class="form-group row">
                <label for="value" class="col-sm-2 col-form-label">Amount: </label>


                <div class="col-sm-10 input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">$</div>
                    </div>

                    <input 
                    type="text" 
                    id="value" 
                    class="form-control" 
                    v-model.lazy="$v.validateAmount.$model" 
                    @blur="isInputActive = false" 
                    @focus="isInputActive = true"
                    :class="{'is-invalid':$v.validateAmount.$error, 'is-valid':!$v.validateAmount.$invalid}" >
                    <div class="valid-feedback"></div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.validateAmount.required">Transaction Value is required.</span>
                        <span v-if="!$v.validateAmount.minValue">Transaction Value should be more than $0.00</span>
                    </div>
                
                </div>
            </div>
            

            <!-- Category -->
            <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="category">Category: </label>

                <div class="col-sm-10">
                    <select class="form-control" v-model="$v.category.$model"  :class="{'is-invalid':$v.category.$error, 'is-valid':!$v.category.$invalid}">
                        <option disabled value="">Please select one</option>
                        <option v-for="category in categories" v-bind:key="category" v-bind:value="category" >{{category}}</option> 
                    </select>
                    <div class="valid-feedback"></div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.category.required">Transaction Category is required.</span>
                    </div>
                </div>
            </div>

            <!-- Method -->
            <div class="form-group row">
                <label for="method" class="col-sm-2 col-form-label">Method: </label>

                <div class="col-sm-10">
                    
                    <select class="form-control" v-model="$v.method.$model"  :class="{'is-invalid':$v.method.$error, 'is-valid':!$v.method.$invalid}">
                        <option disabled value="">Please select one</option>
                        <option v-for="method in methods" v-bind:key="method" v-bind:value="method" >{{method}}</option> 
                    </select>
                    <div class="valid-feedback">

                    </div>
                    <div class="invalid-feedback">
                        <span v-if="!$v.method.required">Transaction Method is required.</span>
                    </div>
                </div>
            </div>

            

            <!-- ! This is the button section -->
            <button class="btn btn-primary" v-on:click="addExpense" >Add</button>
            
    
        </div>
    </div>

                

    
</template>

<script>

import { required, minLength, maxValue, requiredIf, minValue } from "vuelidate/lib/validators"




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
            flags: [],
            today: new Date(),
            

        }
    },
    filters:{
        shortDateFormat(date) {
            return new Intl.DateTimeFormat().format(date)
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
            this.$v.$touch()

            this.errors = []
            // TODO: Need to validate if the amount is numeric etc...
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

        },
        submit() {
            console.log('submit!')
            this.$v.$touch()
            
        },
        
        

    },
    computed: {
        validateAmount: {
            get: function() {

                if(this.isInputActive){

                    // Cursor is inside the input field. unformat display value for user
                    return this.value.toString()
                } else {
                    // User is not modifying now. Format display value for user interface
                    return (Math.round(this.value * 100) / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
                }
            },
            set: function(modifiedValue){

                // Recalculate value after ignoring "$" and "," in user input
                let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
                 // Ensure that it is not NaN
                if (isNaN(newValue)) {
                    newValue = ''                    
                }
                else if (newValue <= 0){
                    newValue = ''

                }
                this.value = newValue

            }

        },
        

    },
    validations: {
        newTransactionName:{
            required,
            minLength: minLength(4)

        },
        
        category: {
            required,      
        },
        validateAmount:{
            required,
            minValue: minValue(1)
        },
        when:{
            required,
            maxValue: when => when < new Date().toISOString()

        },
        method: {
            required
        }

            


    }

}
</script>

<style scoped>
.input-group-addon{
    font-size:24px;
    
}

</style>