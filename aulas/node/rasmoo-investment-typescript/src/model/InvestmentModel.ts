import {v4 as uuid} from "uuid"

export class Investment {

    id: string;
    name: string;
    minValue: number;
    tax: number;
    time: number;

    constructor(name:string, minValue:number, tax:number, time:number){
        this.id = uuid();
        this.name = name;
        this.minValue = minValue;
        this.tax = tax;
        this.time = time;
    }
    
    isValid() {
        return this.name && this.minValue && this.tax && this.time;
    }
    
}
