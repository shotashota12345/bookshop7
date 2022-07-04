const {Sequelize, DataTypes} = require('sequelize')
const connectDb = require('../db/connect')

const books = connectDb.define('books', {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    about:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description:{
        type: DataTypes.STRING(250),
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER, 
        allowNull: true     
    },
    salePrice: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})