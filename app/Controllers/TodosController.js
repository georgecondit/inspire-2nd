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
            
            description: form.description.value,
            completed: false
        }  
        console.log(rawTodo)
    todosService.createTodo(rawTodo);
    form.reset();
    _drawTodo()
    }

        
    deleteTodo(){
        if(window.confirm('Are you sure you want to delete this to-do?') == true){
        todosService.deleteTodo()}
    }

    doneTodo(event){
        event.preventDefault()
       const checkbox = document.getElementById("${this.description")
       this.checkbox = event.target
         let doneTodo = {
             description: this.doneTodo,
             completed: event.target.checked
         }
        todosService.doneTodo()
    }

    
}    