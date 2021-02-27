import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { sandBoxApi } from "./AxiosService.js";

class ImageService{

    constructor(){
        console.log("Images Service is working");
        this.getImages()
    }
    
    async getImages() {
        try {
            const res = await sandBoxApi.get('images')
            console.log(res.data)
            ProxyState.images = new Image(res.data)
        } catch (error) {
            console.error(error)
        }
    }
}

export const imageService = new ImageService()