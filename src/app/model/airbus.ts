import { Aircraft } from './aircraft';

export class Airbus extends Aircraft {
    flybywire: boolean = false;
    constructor(name: String, engineAmount: number, passenger: number, flybywire: boolean){
        super(name, engineAmount, passenger)
        this.flybywire = flybywire
    }
}