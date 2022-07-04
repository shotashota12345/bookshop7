const express = require('express')
const sequelize = require('./db/connect')
const connectdb = require('./db/connect')
const app = express()
const port = process.env.PORT || 3306
const routes = require('./routes/users')

// models sync
const users = require('./models/users')
const books = require('./models/books')
const roles = require('./models/roles')
const user_roles = require('./models/users_roles')
const books_gallery = require('./models/books_gallery')
const books_categories = require('./models/books_categories')
const books_gallery_main = require('./models/books_gallery_main.js')


app.use(express.json())
app.get('/users',(req,res)=>{
    res.send('select')
})

app.use('/admin/users/', routes)

const start = async () => {
    try {

        await connectdb.authenticate()
        await sequelize.sync()
        console.log('connection succesfull')
        app.listen(port, console.log(`server is listening on port ${port}`))
    } catch (error) {
        connectdb.close()
        console.log(error)
    }
}

start()