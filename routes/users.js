const express = require('express')
const routes = express.Router()

// show all users
const {show_all_users,registration_users, login }= require('../controller/users')


routes.route('/').get(show_all_users).post(registration_users)
routes.route('/login').post(login)


module.exports = routes