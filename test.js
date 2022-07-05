const bcrypt = require('bcrypt')



bcrypt.genSalt(10, function(err, salt) {
const x =  bcrypt.hash("B4c0/\/", salt, function(err, hash) {
    try {
        x = []
        x.append(hash)
        console.log(x[0])
    } catch (error) {
        console.log(error)
    }
    })
})



// bcrypt.compare("B4c0/\/", hash, function(err, res){
//     console.log(res)
// })
// Load hash from your password DB.
//bcrypt.compare("B4c0/\/", hash, function(err, res) {
    // res == true
//});
//bcrypt.compare("not_bacon", hash, function(err, res) {
    // res = false
//});