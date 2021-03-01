import{ geosApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import Todos from "../Models/Todos.js";
import TodosController from "../Controllers/TodosController.js";
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
        console.log('You created a Todo Post')
        try {
        const newTodo = await geosApi.post('todos',rawTodo)
        ProxyState.todos = [ ...ProxyState.todos, newTodo]
        }catch (error) {
        console.error(error)
       }
    }
    async deleteTodo(id) {
        try {
        const res = await geosApi.delete(`todos/${id}`)
        this.getTodo()
        } catch (error) {
        console.error(error)
        }
    }
    async doneTodo(id){
        try {
            await geosApi.post('true', id)
        } catch(error) {
            console.error(error)
        }
    }
}       



export const todosService = new TodosService()