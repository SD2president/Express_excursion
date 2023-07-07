// DEPENDENCIES 
const continent = require('express').Router()
const { json } = require('express')
const db = require('../models')
const {continent} = db
const { Op } = require('sequelize')

// Best travel locations in continent 
continent.get("/", async(req,res) => {
    try{
        const continent = await continent.findAll({
            destination: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(continent)
    } catch (error) {
        res.status(500).json(error)
    }
});

//create a destination
continent.post("/destinations", async(req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.error(err.mesage);
    }
});

//get all destinations

//get a destination

//update all destinations
continent.put("/destinations/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateDestination = await query("update destination SET description = $1 WHERE destination_id = $2", 
        [description, id]);

    res.json('Destination was updated')
    } catch (err) {
        res.status(500).json(err.message);
    }
});

//delete a destination
continent.delete("/desintation/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteDestination = await query("DELETE FROM destination WHERE destination_id = $1")
    res.json('Destination was deleted')
    } catch (err) {
        res.status(500).json(err.message);
    }
});