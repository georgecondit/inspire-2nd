import {ProxyState} from "../AppState.js"
import {weatherService } from "../Services/WeatherService.js"

    function _drawWeather(){
        let weather = ProxyState.weather
        let template = ""
        document.getElementById('weather').innerHTML = template
    }
export default class weatherController{

    constructor(){
        console.log("Weather Controller is working");
        console.log(ProxyState.weather)
        _drawWeather()
        ProxyState.on('weather', _drawWeather)

    }
}