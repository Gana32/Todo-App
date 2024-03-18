const Todo = require("../models/todo");

async function createTodoList(Title,description,completed){
    const newTodoList = new Todo({
        title: Title,
        description: description,
        completed: Boolean(completed)
    });
    await newTodoList.save();
    // console.log(title, description, completed)
    return newTodoList;
}

async function getAlltodo(){
    return await Todo.find();
}

async function gettodoByID(id){
    return await Todo.findById(id);
}

async function deletetodo(id){
    return await Todo.findByIdAndDelete(id);
}

async function updatetodo(id,tododata){
    return await Todo.findByIdAndUpdate(id,tododata,{new:true});
}

module.exports={
    createTodoList,
    getAlltodo,
    gettodoByID,
    deletetodo,
    updatetodo
}