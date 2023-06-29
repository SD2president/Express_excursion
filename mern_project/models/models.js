'use strict'
const db = continent; 
const {
    continent
} = require('sequelize')
module.exports = (Sequelize, DataTypes) => {
    class continent extends Model {}

db.init({
    continent_id: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
    },
    destinations: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'continent',
    tableName: 'continent'
})      

    return continent;
};