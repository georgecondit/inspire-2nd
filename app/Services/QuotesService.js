import { ProxyState } from "../AppState.js";
import Quotes from "../Models/Quotes.js";
import { sandBoxApi } from "./AxiosService.js";

class QuotesService{

    constructor(){
        console.log("Quotes Service is working");
        this.getQuotes()
        
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

}   

export const quotesService = new QuotesService()