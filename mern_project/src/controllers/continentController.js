// DEPENDENCIES 
const africa = require('express').Router()
const { json } = require('express')
const db = require('../models')
const {africa} = db
const { Op } = require('sequelize')


// Best travel locations in Africa 
africa.get("/", async(req,res) => {
    try{
        const africa = await africa.findAll({
            destination: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(africa)
    } catch (error) {
        res.status(500).json(error)
    }
})

// 
