import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"


function _drawBGImage() {
    document.getElementById('background-image').style.backgroundImage = `url('${ProxyState.images}')`;
  
}

export default class QuotesController{

    constructor(){
        console.log("Image Controller is working")
        ProxyState.on("images", _drawBGImage)
    }


}