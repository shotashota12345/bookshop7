
const users = require('../models/users')
const bcrypt = require("bcryptjs")



// show all users
const show_all_users = async(req,res) => {
    const all_users = await users.findAll()
    res.status(200).json(all_users)
}

// registration users
const registration_users = async(req,res) => {
    try {
        const {firstName, lastName, mail, password, personalNumber, adress} = req.body
        const hash = await bcrypt.hash(password, 10)
        await users.create({
            firstName: firstName,
            lastName: lastName,
            mail: mail,
            password: hash,
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
        }else if(checkPersonalNumber.personalNumber.length() < 11){
            res.status(200).json('personal number must be 11 characters')
        }
}}


// login users
const login = async(req,res) => {
    try {
        const {mail, password} = req.body
        const user = await users.findOne({where: {mail: mail}})
        bcrypt.compare(password, user.password, function(err, passwordCheck){
            console.log(passwordCheck)
            if(passwordCheck){
                res.status(200).json(`you succesfull entered, hello ${user.firstName}, ${user.lastName}`)
            }
            else{
                res.status(500).json('your password or mail was wrong pls check it')
            }
        })
    } catch (error) {
        res.status(401).json('mail or password was incorrect pls try again later')   
}}

// password recovery || reset password
const password_recovery = async(req,res,next) => {
        try {
            const {mail} = req.body
            const user =  await users.findOne({where:{mail: req.body.mail}})
            const resetlink = `http://localhost:3306/${user.id}/change_password`
            res.status(200).json(`pls follow current link ${resetlink}`)

        } catch (error) {
            res.status(404).json('your mail is wrong pls try register')
        }

    
}
const change_password_link = async(req,res) => {
    try {
        const {password} = req.body
        const {id} = req.params
        const user = await users.findOne({where:{id: id}})
        const hashed_password = await bcrypt.hash(password, 10)
        await user.update(user.password = hashed_password)
        await user.save()
        console.log(user)
        res.status(200).json(`your password was changed ${user.firstName}`)
        
    } catch (error) {
        res.status(404).json('something went wrong', err)
    }

}

module.exports = {show_all_users,login, registration_users, password_recovery, change_password_link}
