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
        
        ProxyState.on("todos", _drawTodo)
    }
    
    createTodo(event) {
        event.preventDefault()        
        let form = event.target
        
        let rawTodo = {
            description: form.description.value, 
        }  
        _drawTodo()
        console.log(rawTodo)
    todosService.createTodo(rawTodo);
    form.reset();
    }

    doneTodo(id){
        let found = ProxyState.todos.find(t => t.id == id)
        found.completed = !found.completed
        ProxyState.completed = ProxyState.completed
    }
    
    deleteTodo(id){
        if(window.confirm('Are you sure you want to delete this to-do?') == true){
        todosService.deleteTodo(id)}
    }

}    