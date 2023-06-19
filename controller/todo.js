const Todo = require('../model/Todos')
// to get all task
const getAllTodos = async(req,res)=>{
      try {
            const todo = await Todo.find({});
            res.status(200).send({todo})
      } catch (error) {
            res.status(500).send({msg : error});
      }
}
// to create a task
const createTodo = async(req,res)=>{
      try {
            const todo = await Todo.create(req.body);
            res.status(200).send({todo});
      } catch (error) {
            res.status(500).send({msg : error})
      }
      
}
// to get single todo
const getSingleTodo =  async (req,res)=>{
      try {
            const {id} = req.params;
            const todo  = await Todo.find({_id : id})
            res.status(200).send({todo});
      } catch (error) {
            res.send({msg : error});
      }
}
// to update todo 
const updateTodo = async (req,res)=>{
      try {
            const {id} = req.params;
            const todo = await Todo.findOneAndUpdate({_id : id}, req.body, {
                  new : true
            })
            res.status(200).send({todo});
      } catch (error) {
            res.status(500).send({msg : error})
      }
}
// to delete todo
const deleteTodo = async(req,res)=>{
      try {
            const {id} = req.params;
            const todo = await Todo.findOneAndDelete({_id : id});
            res.status(201).send(todo);
      } catch (error) {
            res.status(500).send({msg : error})
      }
}

module.exports = {
      getAllTodos,
      createTodo,
      getSingleTodo,
      updateTodo,
      deleteTodo
}