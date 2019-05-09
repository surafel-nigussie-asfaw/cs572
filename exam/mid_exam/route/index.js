const route = require('./route')

const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/cars', route)

app.use((err, req, resp, next) => {

})

app.listen(3000, () => console.log('Listening at 3000...'))