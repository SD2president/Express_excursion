'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    Comment.init({
        comment_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: {
            type:DataTypes.TEXT,
            allowNull:true
        },
        date_posted: {
            type:DataTypes.DATE,
            timestamps: false,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Comments',
        tableName: 'destination',
        timestamps: false
    });
    return Comment;
};