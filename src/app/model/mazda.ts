import { Car } from "./car";

export class Mazda extends Car {
    color: String = "Red";
    constructor(name: string, cylinder: number, capacity: number, color: String) {
        super(name, cylinder, capacity) 
        this.color = color
    }
    whatColor(): String {
        return `it special because have ${this.color} color`
    }
}