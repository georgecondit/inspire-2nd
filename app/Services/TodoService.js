import { ProxyState } from "../AppState.js";
import TodoController from "../Controllers/TodosController.js";
import Todo from "../Models/Todo.js";
import{ sandBoxApi } from "./AxiosService.js"

class TodoService{
    
    constructor(){
        console.log("The Todos Service is Working")
        this.getTodo()
    }   
        async createTodo(rawTodo){
         
            try {
            const res = await sandBoxApi.post('todo')
            console.log('You created a Todo Post')
            }catch (error) {
            console.error(error)
            }
        }
        
        async getTodo(){
            try {
            const res = await sandBoxApi.get('todo')
            ProxyState.todo = res.data.map(rawTodo => new Todo(rawTodo))
            }catch (error) {
            console.error(error)
            }
            
        }        
        
        async deleteTodo() {
            try {
                const res = await sandBoxApi.delete('todo')
                this.getTodo()
            } catch (error) {
                
            }
    } 
}

export const todoService = new TodoService()