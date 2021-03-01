export default class Todos{

    constructor(data){
        
        this.description = data.description;
        this.id = data.id || data._id,
        this.completed = false || true ;
        
       
    }

    get Template(){
        return /*html*/`
        <div class="col-11 offset-1">
            <p><input id="${this.id}" ${this.completed ? 'checked' : ''} class="form-check-input" type="checkbox" name="${this.description}" onclick="app.todosController.doneTodo('${this.id}')"/>
            
            <p>${this.description}
            
            <button type="button"  class="text-danger close" onclick="app.todosController.deleteTodo('${this.id}')"><span>&times;</span></button></p>
        </div>
        `
    }
}