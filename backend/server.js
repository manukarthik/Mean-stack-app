var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose =  require('mongoose')
var jwt = require('jwt-simple')
var app = express();

var User = require('./models/user.js')

var posts = [
{
    message: 'hell'
}, 
{
    message:'hi'
}
]

app.use(cors())
app.use(bodyParser.json())
app.get('/posts', (req, res) => {
    res.send(posts)
})
app.get('/users', async(req, res) => {
    try{
        var users = await User.find({}, '-password -__v')
        res.send(users)
    }
    catch(error){
        console.error(console.error())
        res.sendStatus(500)
          
    }
})
app.post('/register', (req, res) => {
    var userData = req.body;
    var user = new User(userData)
    user.save((err, result)=>{
        console.log('saving user eror')
        res.sendStatus(200)
    })
    console.log(userData)
    res.sendStatus(200)
})

app.post('/login',async (req, res) => {
    var userData = req.body;
    var user = await User.findOne({ email: userData.email })
    if(!user)
      return res.status(401).send({message:'Email or Password invalid'})

    if(userData.password != user.password)
      return res.status(401).send({message:'Email or passoword invalid'})
    var payload ={}

    var token=jwt.encode(payload,'123')
    console.log(token)
    res.status(200).send({token})
})
mongoose.connect('mongodb://test:test@ds121589.mlab.com:21589/mean',(err)=>{
    if(!err) 
    console.log('Connected to mongo')
})
app.listen(3000) 