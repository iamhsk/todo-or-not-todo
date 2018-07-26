let express = require('express')
let mongoose = require('mongoose')
let bodyParser = require('body-parser')
let todoModel = require('./models/todo.js')
mongoose.connect('mongodb://localhost:27017')
let app = express()
let port = 3000 

app.use(bodyParser.urlencoded({ extended: false}))
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    next();
})
app.listen(port)

app.get('/todos', async function (req, res){ 
    var allToDos = await todoModel.findAll()
    res.send(allToDos)
})

app.get('/todos/:id', async function (req, res) {
    let idToLookUp = req.params.id;
    var singleTodo = await todoModel.findById(idToLookUp)
    res.send(singleTodo)
})

app.post('/todos', async function (req, res){
    let todoName = req.body.lockhart
    let savedTodo = await todoModel.create(todoName)
    res.send(savedTodo.id)
})
