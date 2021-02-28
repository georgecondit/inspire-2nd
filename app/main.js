import TodosController from "./Controllers/TodosController.js"
import ImageController from "./Controllers/ImageController.js"
import QuotesController from "./Controllers/QuotesController.js"
import WeatherController from "./Controllers/WeatherController.js"
class App {
  
  todosController = new TodosController()
  imageController = new ImageController();
  quotesController = new QuotesController()
  weatherController = new WeatherController()

}

window["app"] = new App();
