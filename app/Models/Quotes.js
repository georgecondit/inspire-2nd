export default class Quotes{ 


    constructor(data) {
        this.author = data.author,
        this.content = data.content
    }

    get Template(){
          return /*html*/`
          
          <h2 class="author">"${this.author}"</h2>

          <h4 class="quip">"${this.content}"</h4>
          `


    }


}