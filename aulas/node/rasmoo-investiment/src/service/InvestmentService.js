const Investment = require("../model/investment");
const ResponseException = require("../handler/ResponseException");
const {nextId} = require("../util/InvestmentUtil");

const investiments = [
    new Investment(1, "CDB - Pós-Fixado", 1000, 103.75, 30), 
    new Investment(2, "CDB - Pós-Fixado", 1000, 104.25, 60),
    new Investment(3, "CDB - Pós-Fixado", 5000, 112, 180),
    new Investment(4, "Tesouro Prefixado 2025", 783.33, 13.10, 1080),
    new Investment(5, "Tesouro Selic 2025", 11868, 0.1, 1080)
];

const findAll = ({name, minValue, maxValue, minTax, time})  => {
    const investimentFiltered = investiments.filter((investiment) => {
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

const findById = ({id}) => {
    const investiment = investiments.find((investiment) => investiment.id == id);
    if(investiment != null){
        return investiment;
    }

    throw new ResponseException(404, "Investment Not Found");
};

const deleteById = ({id}) => {
    const index = investiments.findIndex((investiment) => investiment.id == id);

    if(index < 0){
        throw new ResponseException(404, "Investment Not Found");
    }
    
    investiments.splice(index, 1);
};

const save = ({name, minValue, tax, time}) => {
    const investiment = new Investment(nextId(investiments), name, minValue, tax, time);
    if(investiment.isValid()){
        investiments.push(investiment);
        return investiment;
    } 

    throw new ResponseException(400, "All attributes must be defined.");
};

const update = ({id}, {name, minValue, tax, time}) => {
    const investiment = investiments.find((investiment) => investiment.id == id);
    if(investiment != null) {
        investiment.name = name;
        investiment.minValue = minValue;
        investiment.tax = tax;
        investiment.time = time;
        if(investiment.isValid()){
            return investiment;
        } else {
            throw new ResponseException(400, "All attributes must be defined.");
        }
    }
    throw new ResponseException(404, "Investment Not Found");
};


module.exports = {
    findAll,
    findById,
    deleteById,
    save,
    update
}


