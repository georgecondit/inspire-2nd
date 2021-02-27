import Weather from "./Models/Weather.js"
import Quotes from "./Models/Quotes.js"
import Image from "./Models/Image.js"
import Todo from "./Models/Todo.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
 

  /** @type {Weather} */
  weather = null

 /** @type {Quotes} */
  quotes = null
  
  images = null


 /** @type {Todo[]} */
   todo = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
