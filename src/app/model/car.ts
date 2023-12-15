export class Car {
    name: string
    cylinder: number
    capacity: number
    constructor(name: string, cylinder: number, capacity: number) {
        this.name = name
        this.cylinder = cylinder,
        this.capacity = capacity
    }
    carDetail() {
        return `This ${this.name} has ${this.cylinder} Cylinder and ${this.capacity}CC `
    }
}