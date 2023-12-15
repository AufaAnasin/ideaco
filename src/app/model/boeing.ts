import { Aircraft } from "./aircraft";

export class Boeing extends Aircraft {
    hascopilot: boolean = false;
    constructor(name: String, engineAmount: number, passenger: number, hascopilot: boolean) {
        super(name, engineAmount, passenger)
        this.hascopilot = hascopilot
    }
}