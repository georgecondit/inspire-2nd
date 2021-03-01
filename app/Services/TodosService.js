import{ geosApi } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import Todos from "../Models/Todos.js";

export default class TodosService{
    constructor(rawTodo){
        
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
        const res = await geosApi.post('todos',rawTodo)
        ProxyState.todos = [ ...ProxyState.todos, new Todos(res.data)]
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
    async doneTodo(event, id){
        event.preventDefault()
        let checkboxElem = document.getElementById('${this.id}')
        if(this.doneTodo) {checkboxElem = event.target.checked}
            try {
            const res = await geosApi.doneTodos.post('todos' + id, )
            ProxyState.completed = ProxyState.completed
        } catch(error) {
            console.error(error)
        }
    }
        
    }
      



export const todosService = new TodosService()