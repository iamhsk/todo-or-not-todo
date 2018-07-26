let todoModel = require("../models/todo.js")

let todo = todoModel.Todo 

describe("TodoModel", function(){
    it("calls mongoose find", function(){
        spyOn(todo, 'find')
        todoModel.findAll()
        expect(todo.find).toHaveBeenCalled();
    })

    it("sends an empty object", function(){
        spyOn(todo, 'find')
        todoModel.findAll()
        expect(todo.find).toHaveBeenCalledWith({}, jasmine.any(Function));
    })

    it("returns all the todos", async function(){
        spyOn(todo, 'find').and.returnValue("list")
        expect(await todoModel.findAll()).toBe("list")
    })
})