const {Sequelize, DataTypes} = require('sequelize')
const connectDb = require('../db/connect')

const books_gallery_main = connectDb.define('books_gallery_main', {
    id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    photo_types_id: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    poster:{
        allowNull: false,
        type: DataTypes.STRING
    }
})

module.exports = books_gallery_main