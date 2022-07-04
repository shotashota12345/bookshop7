
const users = require('../models/users')
const Sequelize = require('sequelize')


// show all users
const show_all_users = async(req,res) => {
    const all_users = await users.findAll()
    res.status(200).json(all_users)
}

// registration users
const registration_users = async(req,res) => {
    try {
        const {firstName, lastName, mail, password, personalNumber, adress} = req.body
        await users.create({
            firstName: firstName,
            lastName: lastName,
            mail: mail,
            password: password,
            personalNumber: personalNumber,
            adress: adress,
        })
        res.status(200).json('congrats, you registered succesfully')
    } catch (error) {
        const checkMail = await users.findOne({where: {mail: req.body.mail }})
        const checkPersonalNumber = await users.findOne({where: {personalNumber: req.body.personalNumber}})
        if(checkMail) {
            res.status(401).json('Error: Sorry this mail is used')
        }
        else if(checkPersonalNumber){
            res.status(401).json('Error: sorry this personal Number is used')
        }
}}

// login users
const login = async(req,res) => {
    try {
        const {mail, password} = req.body
        const x = await users.findOne({where: {mail: req.body.mail, password: req.body.password}})
        res.status(200).json(`you entered succesfully, Hello ${x.firstName} ${x.lastName}`)
    } catch (error) {
        res.status(401).json('mail or password was incorrect pls try again later')
    }


} 




module.exports = {show_all_users,login, registration_users}
