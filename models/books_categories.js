const {Sequelize, DataTypes} = require('sequelize')
const connectDb = require('../db/connect')

const books_categories = connectDb.define('books_categories', {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    category:{
        type: DataTypes.STRING,
        allowNull: false
    },
    bookid:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
})