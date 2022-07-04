const {Sequelize, DataTypes} = require('sequelize')
const connectDb = require('../db/connect')

const books_gallery = connectDb.define('books_gallery', {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    book_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    images:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phototypes:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports = books_gallery