// DEPENDENCIES
require('dotenv').config()
const PORT = process.env.PORT
const express= require('express')
const app = express()
const cors = require('cors')
const { Sequelize } = require('sequelize')


//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Express Excusions'
    })
})

// CONTROLLERS

const destinationsController = require('./controllers/destinations_controller')
app.use('/destinations', destinationsController)

const continentsController = require('./controllers/continent_controllers')
app.use('/continents', continentsController)

//404 Page
app.get('*', (req,res) => {
    res.send('404') // we can add page for this later
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
  

module.exports = app;