var User=require('./models/User.js')
var jwt = require('jwt-simple')
var bcrypt = require('bcrypt-nodejs')
var express=require('express')
var router=express.Router()



   router.post('/register' , (req, res) => {
    var userData = req.body;
    var user = new User(userData)
    user.save((err, result) => {
        console.log('saving user eror')
        res.sendStatus(200)
    })
})

       router.post('/login', async (req, res) => {
        var LoginData = req.body;
        var user = await User.findOne({ email: LoginData.email })
        if (!user)
            return res.status(401).send({ message: 'Email or Password invalid' })
        bcrypt.compare(LoginData.password, user.password, (err, isMatch) => {
            if (!isMatch)
                return res.status(401).send({ message: 'Email or passoword invalid' })
            var payload = {sub: user._id}

            var token = jwt.encode(payload, '123')
            console.log(token)
            res.status(200).send({ token })
        })

       })
module.exports = router