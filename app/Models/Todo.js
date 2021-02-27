export default class Todos{

    constructor(data, isDone){
        this.todo = data.todo
        this.id = data.id
        this.isDone = isDone || false
    }

    getTemplate(){
        return /*html*/`
        <form onsubmit="app.todoController.createTodo(event,'${this.id}')">
            <div class="form-group ">
                <input class="font"type="text" name="title" minlength="3" maxlength="50" placeholder="New Todo" required>
                <button class="font" type="submit">Add</button>
            </div>
        </form>
            <div class="col-12 font" id="list-item">
                ${this.todo} 
            </div>
            <div class="font" id="doneItems">
                ${this.isDone}
            </div>
        <p><input id="${this.id}" ${this.todo ? 'checked' : ''} class="form-check-input" type="checkbox" name="${this.id}" onchange="app.todoController.itemDone('${this.id}')">
        ${this.todo}
        <button type="button"  class="text-danger close" onclick="app.todoController.delete('${this.id}')"><span>&times;</span></button></p>
    </div>
        `
    }
}