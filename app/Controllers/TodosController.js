import { todosService } from "../Services/TodosService.js";
import { ProxyState } from "../AppState.js";

function _drawTodo(){
    let todos = ProxyState.todos
    let template = "";
    todos.forEach(t => template += t.Template)
    console.log(ProxyState.todos)
    document.getElementById("list").innerHTML = template
    document.getElementById("number-todos").innerHTML = `${ProxyState.todos.filter(t => t.completed == true).length} /${ProxyState.todos.length}`
    
}

export default class TodosController{
    constructor() {
        console.log("Todos Controller is working");
        ProxyState.on("todos", _drawTodo)
    }
    
    createTodo(event) {

        console.log("create todo");
        event.preventDefault()        
        let form = event.target
        
        let rawTodo = {
            todo: form.todos.value,
            description: form.description.value,
            completed: false
        }  
        console.log(rawTodo)
    todosService.createTodo(rawTodo);
    form.reset();
    _drawTodo()
    }

        
    deleteTodo(id){
        if(window.confirm('Are you sure you want to delete this to-do?') == true){
        todosService.deleteTodo(id)}
    }

    doneTodo(event){
        event.preventDefault()
        let found = ProxyState.todos.find(t => t.id == this.doneTodo)
        found.doneTodo = !found.doneTodo
        let checkbox = event.target
        let doneTodo = {
            completed: true
            
        }
    
    }
    
}    