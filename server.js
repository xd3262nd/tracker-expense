let express = require('express')
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')
let path = require('path')

// App config
let app = express()

app.use(bodyParser.json())

app.use('/api', api_routes)

//Serves the Vue aoo
app.use(express.static(path.join(__dirname, 'client', 'dist')))

// Start server running
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})