import { Car } from "./car";

export class Honda extends Car {
    airbag: number = 4;
    constructor(name: string, cylinder: number, capacity: number, airbag: number) {
        super(name, cylinder, capacity)
        this.airbag = airbag
    }
    airbagAmount(): String {
        return `and has ${this.airbag} airbags`
    } 
}