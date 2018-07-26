let mongoose = require('mongoose')

let todoSchema = mongoose.Schema({
    name: String,
    dueDate: Date
    //isDone: Boolean
})

let Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo