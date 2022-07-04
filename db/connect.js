const mysql = require('mysql')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bookshop_db', 'bookshop_user', 'p{P9y=*2v@Ze', {
    host: 'bookshop.com.ge',
    dialect: 'mysql'
})

module.exports = sequelize