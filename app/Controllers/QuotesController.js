import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"


function _drawQuote(){
    document.getElementById('quote').innerHTML = ProxyState.quotes.Template
}
    

export default class QuotesController{
    constructor() {
        console.log("Quote Controller is working")
        ProxyState.on('quotes', _drawQuote)

    }

}