let Todo = require("./TodoMongoose.js")

var findAll = async function (){
    var allToDos = await Todo.find({}, function(err, todos){
        return todos
    }) 
    return allToDos
}

var findById = async function (idToLookUp) {
    var singleTodo
    await Todo.findById(idToLookUp, function(err, todos){
        singleTodo = todos
    })
    return singleTodo 
} 

var create = async function (todoName){
    let todo = new Todo({
        name: todoName, 
        dueDate: Date.now()
    })
    await todo.save( function (err, todo){
        if (err) return console.error(err);
        console.log('Success')
    })
    console.log()
    return todo
}

module.exports = { findAll, findById, create, Todo }