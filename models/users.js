const {DataTypes} = require('sequelize')
const connectDb = require('../db/connect')
const jwt = require('jsonwebtoken')

const users = connectDb.define('users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    mail:{
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique: true,
        unique:{
            args: true,
            msg: 'email adress already in use pls try another one'
        }
    },
    password:{
        type: DataTypes.STRING(64),
        allowNull: false
    },
    personalNumber:{
        unique: true,
        type: DataTypes.STRING,   
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = users