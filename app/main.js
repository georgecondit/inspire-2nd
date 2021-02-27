import TodoController from "./Controllers/TodosController"
import ImageController from "./Controllers/ImageController.js"
import QuotesController from "./Controllers/QuotesController.js"
import WeatherController from "./Controllers/WeatherController.js"
class App {
  
  todoController = new TodoController()
  imageController = new ImageController();
  quotesController = new QuotesController()
  weatherController = new WeatherController()

}

window["app"] = new App();
