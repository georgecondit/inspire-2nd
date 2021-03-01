export default class Todos{

    constructor(data){
        this.todos = data.todos;
        this.id = data.id || data._id,
        this.description = data.description;
        this.completed = false;
        this.doneTodo = data.doneTodo || false
       
    }

    get Template(){
        return /*html*/`
        <div class="col-11 offset-1">
            <p><input id="${this.id}" ${this.doneTodo ? 'checked' : ''} class="form-check-input" type="checkbox" name="${this.todos}" onclick="app.todosController.doneTodo('${this.id}')"/>
            
            <p>${this.description}
            
            <button type="button"  class="text-danger close" onclick="app.todosController.deleteTodo('${this.id}')"><span>&times;</span></button></p>
        </div>
        `
    }
}