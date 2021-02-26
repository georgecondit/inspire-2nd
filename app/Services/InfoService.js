import { ProxyState } from "../AppState.js";
import Quotes from "../Models/Quotes.js";
import Weather from "../Models/Weather.js";
import { sandBoxApi } from "./AxiosService.js";


class InfoService{

    constructor(){
        console.log("info service");
        this.getWeather()
        this.getQuotes()
        this.getImages()
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

    async getQuotes(){
        try {
            const res = await sandBoxApi.get('quotes')
            console.log(res.data)
            ProxyState.quotes = new Quotes(res.data)
        } catch (error) {
         console.error(error)   
        }
    }

    async getImages(){
        try {
            const res = await sandBoxApi.get('images')
            console.log(res.data)
            ProxyState.images = (res.data)
        } catch (error) {
            console.error(error)
        }

    }


}

export const weatherService = new InfoService()