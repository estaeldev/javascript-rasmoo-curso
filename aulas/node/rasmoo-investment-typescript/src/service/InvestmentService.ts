import { Investment } from "../model/InvestmentModel";
import { ResponseErro } from "../error/ResponseErro";

class InvestmentService {

    investiments: Array<Investment>

    constructor(){
        this.investiments = [
            new Investment("CDB - Pós-Fixado", 1000, 103.75, 30), 
            new Investment("CDB - Pós-Fixado", 1000, 104.25, 60),
            new Investment("CDB - Pós-Fixado", 5000, 112, 180),
            new Investment("Tesouro Prefixado 2025", 783.33, 13.10, 1080),
            new Investment("Tesouro Selic 2025", 11868, 0.1, 1080)
        ];
    }


    findAll({name, minValue, maxValue, minTax, time}:any) {
        const investimentFiltered = this.investiments.filter((investiment) => {
            let condition = true; 
            if(name) {
                condition &&= investiment.name.startsWith(name);
            }
            if(minValue) {
                condition &&= investiment.minValue >= minValue;
            }
            if(maxValue) {
                condition &&= investiment.minValue < maxValue;
            }
            if(minTax) {
                condition &&= investiment.tax >= minTax;
            }
            if(time) {
                condition &&= investiment.time >= time;                
            }
            return condition;
    
        });
    
        return investimentFiltered;
    };
    
    findById(id:string) {
        const investiment = this.investiments.find((investiment) => investiment.id === id);
        if(investiment != null){
            return investiment;
        }
    
        throw new ResponseErro(404, "Investment Not Found");
    };
    
    deleteById(id:string) {
        const index = this.investiments.findIndex((investiment) => investiment.id === id);
    
        if(index < 0){
            throw new ResponseErro(404, "Investment Not Found");
        }
        
        this.investiments.splice(index, 1);
    };
    
    save({name, minValue, tax, time}:Investment) {
        const investiment = new Investment(name, minValue, tax, time);
        if(investiment.isValid()){
            this.investiments.push(investiment);
            return investiment;
        } 
        
        throw new ResponseErro(400, "All attributes must be defined.");
    };
    
    update(id:string, {name, minValue, tax, time}:Investment) {
        const investiment = this.investiments.find((investiment) => investiment.id === id);
        if(investiment != null) {
            investiment.name = name;
            investiment.minValue = minValue;
            investiment.tax = tax;
            investiment.time = time;
            if(investiment.isValid()){
                return investiment;
            } else {
                throw new ResponseErro(400, "All attributes must be defined.");
            }
        }
        throw new ResponseErro(404, "Investment Not Found");
    };
}


export default new InvestmentService();

