const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const videos = require('./data')
server.set('view engine', 'njk')
nunjucks.configure('views',{
     express: server
})

server.use(express.static('public'))

server.get('/', (req,res)=>{
    res.render("index")
})

server.get('/classes', (req,res)=>{
     res.render("classes", {item: videos})
})

const port = 5000
server.listen(port, ()=> console.log("server is running"))