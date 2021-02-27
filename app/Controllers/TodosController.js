import { todoService } from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

function _drawTodo(){
    let todo = ProxyState.todo
    let template = ""
    todo.forEach(list => template += todo.Template)
    document.getElementById('todo').innerHTML = template
}

export default class TodoController{
    constructor() {
        console.log("Cars Controlloer is working");
        console.log(ProxyState.todo)
        _drawTodo
        ProxyState.on("todo", _drawTodo)
    }
    
    createTodo(event) {
        event.preventDefault()        
        let form = event.target
        let rawTodo = {
            title: form.title.value,
            }  
            console.log(rawTodo)
            todoService.createTodo(rawTodo)
        }    
           
}    