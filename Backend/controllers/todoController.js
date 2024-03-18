const todoRepository=require('../repositories/todoRepository')

async function createTodoList(req,res) {

    const {title,description,completed}=req.body;
    try{
        const todo=await todoRepository.createTodoList(title,description,completed);
        res.status(201).json(todo);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

async function getALlTodoList(req,res){
    try{
        const todos=await todoRepository.getAlltodo();
        res.status(201).json(todos);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

async function findtodobyId(req,res){

    const {id}= req.params;
    try{
        const todo=await todoRepository.gettodoByID(id);
        res.status(201).json(todo);
        // console.log(id);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }

}

async function deletetodo(req,res){

    const {id}=req.params;
    try{
        const todo=await todoRepository.deletetodo(id);
        res.status(201).json(todo);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

async function updatetodo(req,res){
    const {id}=req.params;
    const tododata=req.body;
    try{
        const todo=await todoRepository.updatetodo(id,tododata);
        res.status(201).json(todo);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports={
createTodoList,
getALlTodoList,
findtodobyId,
deletetodo,
updatetodo
}