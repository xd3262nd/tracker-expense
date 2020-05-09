// Create API Server routes

let express = require('express')
let db = require('../models')
let Expense = db.Expense

let router = express.Router()

router.get('/expenses', function(req,res,next){
    Expense.findAll( { order: ['date'] }).then( expenses => {
        return res.json(expenses)
    })
})

router.post('/expenses', function(req,res,next){
    Expense.create(req.body).then( (data) => {
        return res.status(201).send('Created!')
    })
})

router.get('/categories', function(req,res,next){
    return res.json(['Bills & Utilities', 'Entertainment', 'Food & Drink', 'Gas', 'Groceries', 'Health & Wellness', 'Travel'])
})

router.get('/methods', function(req,res,next){
    return res.json(['Debit Card', 'Credit Card', 'Cash'])
})



module.exports = router