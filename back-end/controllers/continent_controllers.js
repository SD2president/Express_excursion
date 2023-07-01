// DEPENDENCIES
const continents = require('express').Router()
const db = require('../models')
const { Destination } = db 


// FIND ALL DESTINATIONS ON SAME CONTINENT
continents.get('/:continent_name', async (req, res) => {
    try {
        const listDestinations = await Destination.findAll({
            where:  { continent_name: req.params.continent_name }
        })
        res.status(200).json(listDestinations)
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find destinations')
    }
})

// EXPORT
module.exports = continents