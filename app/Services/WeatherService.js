import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js";
import Weather from "../Models/Weather.js";


class WeatherService{

    constructor(){
        console.log("weather service");
        this.getWeather()
        
    }
    
    async getWeather() {
        try {
            
            const res = await sandBoxApi.get('weather')
            console.log(res.data);
            ProxyState.weather = new Weather(res.data)
        } catch (error) {
            console.error(error)
        }
    }
}

export const weatherService = new WeatherService()