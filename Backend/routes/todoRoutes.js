const express=require('express');
const router=express.Router();
const todoController=require('../controllers/todoController');

router.post('/create', todoController.createTodoList);
router.get('/getAll', todoController.getALlTodoList);
router.get('/getbyid/:id', todoController.findtodobyId);
router.delete('/delete/:id',todoController.deletetodo);    
router.put('/update/:id',todoController.updatetodo);    


module.exports=router;