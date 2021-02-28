import{ geosApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import Todos from "../Models/Todos.js";
export default class TodosService{
    constructor(rawTodo){
        console.log("The Todos Service is Working")
        this.getTodo()  
    }   
    async getTodo(){
        try {
    
            const res = await geosApi.get('todos')
            ProxyState.todos = res.data.map(t => new Todos(t))
        }catch (error) {
            console.error(error)
        }
    }        
    async createTodo(rawTodo){
        try {
        const newTodo = await geosApi.post(rawTodo)
        ProxyState.todos = [ ...ProxyState.todos, newTodo]
        console.log('You created a Todo Post')
        }catch (error) {
        console.error(error)
       }
    }  
    async deleteTodo() {
        try {
        await geosApi.delete('todos')
        this.getTodo()
        } catch (error) {
        console.error(error)
        }
    }
    async doneTodo(){
        let todo = ProxyState.todos.find(t => t.todos == Todos)
        todo.completed == true ? todo.completed = false : todo.completed = true
        try {
        await geosApi.put('', todo)
        ProxyState.todos = ProxyState.todos
        } catch (error) {
        console.error(error) 
        }
    }
}       



export const todosService = new TodosService()