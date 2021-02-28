import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "./AxiosService.js";

export default class ImageService{

    constructor(){
        console.log("Images Service is working");
        this.getImages()
    }
    
    async getImages() {
        try {
            const res = await sandBoxApi.get('images')
            console.log(res.data)
            ProxyState.images = res.data.url
        } catch (error) {
            console.error(error)
        }
    }
}

export const imageService = new ImageService()