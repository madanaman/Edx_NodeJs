const express = require('express') 
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const post_funcs = require('./routes/posts.js')
const comm_funcs = require('./routes/comments.js')

const app = express() 

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

let store = {}
store.post = [
    {"name": "Top 10 ES6 Features every Web Developer must know",
    "url": "https://webapplog.com/es6",
    "text": "This essay will give you a quick introduction to ES6. If you don’t know what is ES6, it’s a new JavaScript implementation.",
    "comments": [{
      "text": "Cruel…..var { house, mouse} = No type optimization at all"},
      {"text": "I think you’re undervaluing the benefit of ‘let’ and ‘const’."},
      {"text": "(p1,p2)=>{ … } ,i understand this ,thank you !"}      
    ]
    }
  ]

app.get('/posts',(req,res)=>{
	console.log('inside app.get')
	post_funcs.getPosts(store,req,res)
})

app.post('/posts',(req,res)=>{
	post_funcs.addPost(store,req,res)
})

app.put('/posts/:id',(req,res)=>{
	post_funcs.updatePost(store,req,res)
})

app.delete('/posts/:id',(req,res)=>{
	post_funcs.removePost(store,req,res)
})

app.get('/posts/:id/comments',(req,res)=>{
	comm_funcs.getComments(store,req.params.id,req,res)
})

app.post('/posts/:id/comments',(req,res)=>{
	comm_funcs.addComment(store,req.params.id,req,res)
})


app.put('/posts/:id/comments/:cid',(req,res)=>{
	comm_funcs.updateComment(store,req.params.id,req.params.cid,req,res)
})

app.delete('/posts/:id/comments/:cid',(req,res)=>{
	comm_funcs.removeComment(store,req.params.id,req.params.cid,req,res)
})

app.listen(3000)