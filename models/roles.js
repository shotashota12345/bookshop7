const {Sequelize, DataTypes} = require('sequelize')
const connectDb = require('../db/connect')

const roles = connectDb.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role_name: {
        type: DataTypes.STRING,
        
    }
})

module.exports = roles