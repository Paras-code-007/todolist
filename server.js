const express= require('express')
const server = express()

let todos=[{
    task: "making todolist",
    done: "yes"
},{
    task: "making html game",
    done: "no"
}]

//server.use(express.json)
//server.use(express.urlencoded)
server.use(function () {
    console.log("decoded")
})


server.get('/todos',function (req,res) {
    console.log("displayed")
    res.send(todos)
})

server.post('/todos', function (req,res) {
    todos.push({
        task: req.body.task,
        done: req.body.done 
    })
    res.send(todos)
    console.log("added")
})

server.get('/todos/:id', function (req,res) {
    res.send(todos[req.params.id])
    console.log("added")
})

server.patch('/todos/:id/', function (req,res) {
    todos[req.params.id].task= req.body.task //no colon here , we will have = here because we are writing a statement 
    todos[req.params.id].done= req.body.done
    res.send(todos)
    console.log("replaced")
})
server.delete('/todos/:id',function (req,res) {
    todos.splice(req.params.id,1)
    res.send(todos)
    console.log("deleted")
})

server.listen(2121)