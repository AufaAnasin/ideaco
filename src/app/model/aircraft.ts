export class Aircraft {
    name: String;
    engineAmount: number;
    passenger: number;

    constructor(name: String, engineAmount: number, passenger: number) {
        this.name = name
        this.engineAmount = engineAmount
        this.passenger = passenger
    }
    aircraftDetail(name: String, engineAmount: number, passenger: number): String {
        return `This is ${name} that has ${engineAmount} engines and could bring ${passenger} passengers`
    }
}