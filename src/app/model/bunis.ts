import { Campus } from './campus';

export class Bunis extends Campus {
    constructor(name: String, accreditation: String){
        super(name, accreditation)
    }
    detailBunis(): String {
        return `This is Bunis Campus that has ${this.accreditation} Accrediation`
    }
}