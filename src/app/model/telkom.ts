import { Campus } from './campus';

export class Telkom extends Campus {
    constructor(name: String, accreditation: String){
        super(name, accreditation)
    }
    detailTelkom(): String {
        return `This is Telkom University Campus that has ${this.accreditation} Accrediation`
    }
}