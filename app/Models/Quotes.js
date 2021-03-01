export default class Quotes{ 


    constructor(data) {
        this.author = data.author,
        this.content = data.content
    }

    get Template(){
          return /*html*/`
          
          
          <h4 class="quip show">"${this.content}"</h4>
          <h2 class="author hide">"${this.author}"</h2>
          `


    }


}