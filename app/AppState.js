import Weather from "./Models/Weather.js"
import Quotes from "./Models/Quotes.js"
import Todos from "./Models/Todos.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
 
  /** @type {Weather} */
  weather = null

 /** @type {Quotes} */
  quotes = null

 /** @type {Todos[]} */
   todos = []

   images = ''
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
