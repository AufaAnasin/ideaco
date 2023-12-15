import { Car } from "./car";

export class Toyota extends Car {
    turbocharger: boolean = false;
    constructor(name: string, cylinder: number, capacity: number, turbocharger: boolean) {
        super(name, cylinder, capacity) 
        this.turbocharger = turbocharger
    }
}