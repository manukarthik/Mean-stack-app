var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose =  require('mongoose')
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
app.post('/register', (req, res) => {
    var userData = req.body;
    var user = new User(userData)
    user.save((err, result)=>{
        console.log('saving user error')
        res.sendStatus(200)
    })
    console.log(userData)
    res.sendStatus(200)
})
mongoose.connect('mongodb://test:test@ds121589.mlab.com:21589/mean',(err)=>{
    if(!err)
    console.log('Connected to mongo')
})
app.listen(3000) 