import { Aircraft } from './aircraft';

export class Cesna extends Aircraft {
    canFly: boolean = true;
    constructor(name: String, engineAmount: number, passenger: number) {
        super(name, engineAmount, passenger)
    }
    isAble(): boolean {
        if (this.passenger > 2) {
            this.canFly = false
        } else {
            this.canFly = true
        }
        return this.canFly
    }
}