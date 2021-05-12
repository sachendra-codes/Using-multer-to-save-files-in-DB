const express = require('express')
const bodyParser = require('body-parser')
const getConnection = require('./config/database')
const productRoutes = require('./routes/product')
// create express app
const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Connecting to database
getConnection()
app.use('/products', productRoutes)

// listen for requests
app.listen(5000, () => {
  console.log('Server is listening on port 3000')
})
