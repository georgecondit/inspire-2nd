export default class Todos{

    constructor(data, description, completed, doneTodo){
        this.todos = data.todos;
        this.description = data.description;
        this.completed = false;
       
    }

    get Template(){
        return /*html*/`
        <div class="col-11 offset-1">
            <p><input id="${this.description}" ${this.completed ? 'checked' : ''} class="form-check-input" type="checkbox" name="${this.todos}" onclick="app.todosController.doneTodo(event)">
            
            <p>${this.description}
            
            <button type="button"  class="text-danger close" onclick="app.todosController.deleteTodo('${this.description}')"><span>&times;</span></button></p>
        </div>
        `
    }
}