export default class Weather{ 


        constructor(data) {
            this.name = data.name
            this.temp = (Math.floor(data.main.temp - 273.15)*9/5+32)
            this.wind = data.wind.speed
            this.direction = data.wind.deg
        }
        
        

        get Template(){
              return /*html*/`
                <h1> ${this.name} </h1>
                <h2> ${this.temp}ºF</h2>
                <h4> Wind:${this.wind} knots</h4>
                <h4> ${this.direction}ºfrom North</h4>
              `


        }
        
    
}