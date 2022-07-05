const express = require('express')
const routes = express.Router()

// show all users
const {show_all_users,registration_users, login, password_recovery, change_password_link, profile_page}= require('../controller/users')


routes.route('/users').get(show_all_users)
routes.route('/registration').post(registration_users)
routes.route('/login').post(login)
routes.route('/password_recovery').post(password_recovery)
routes.route('/:id/change_password').post(change_password_link)
routes.route('/profile/:id').get(profile_page)


module.exports = routes