var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose =  require('mongoose')
var jwt = require('jwt-simple')
var app = express();
var bcrypt= require('bcrypt-nodejs')
var User = require('./models/User.js')
var Post = require('./models/Post.js')
var auth = require('./auth.js')

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

app.post('/post', (req,res)=>{
    var postData = req.body
    postData.author = '5ac127d196dd73050cf83c67'
    var post = new Post(postData)

    post.save((err, result) => {
        if(err){
        console.error('saving post eror');
        return res.status(500).send({ message: 'saving post error' })
        }
        res.sendStatus(200)
    })
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

app.get('/profile/:id', async (req, res) => {
    
    try {
        var user = await User.findById(req.params.id, '-password -__v')
        res.send(user)
    }
    catch (error) {
        console.error(console.error())
        res.sendStatus(500)

    }
})



mongoose.connect('mongodb://test:test@ds121589.mlab.com:21589/mean',(err)=>{
    if(!err) 
    console.log('Connected to mongo')
})

app.use('/auth', auth)
app.listen(3000) 