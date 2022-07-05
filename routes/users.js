const express = require('express')
const routes = express.Router()

// show all users
const {show_all_users,registration_users, login }= require('../controller/users')


routes.route('/users').get(show_all_users)
routes.route('/registration').post(registration_users)
routes.route('/login').post(login)


module.exports = routes