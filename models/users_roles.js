const {Sequelize, DataTypes} = require('sequelize')
const connectDb = require('../db/connect')

const users_roles = connectDb.define('users_roles',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = users_roles