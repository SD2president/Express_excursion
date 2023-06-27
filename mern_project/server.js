//dependencies
const express = require('express')
const app = express()
const { Sequelize } = require("sequelize");

//Config
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Sequelize Connection
const Sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: process.env.PG_PASS,
    port: process.env.PORT

})

try {
    Sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}
