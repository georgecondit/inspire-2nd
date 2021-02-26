import InfoController from "./Controllers/InfoController.js"
class App {

  weatherController = new InfoController();

  

  //todosController = new TodosContorller();
}

window["app"] = new App();
