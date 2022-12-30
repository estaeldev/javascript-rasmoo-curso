const Investment = require("../model/investment");
const ResponseException = require("../handler/ResponseException");

const investiments = [
    new Investment(1, "CDB - Pós-Fixado", 1000, 103.75, 30), 
    new Investment(2, "CDB - Pós-Fixado", 1000, 104.25, 60),
    new Investment(3, "CDB - Pós-Fixado", 5000, 112, 180),
    new Investment(4, "Tesouro Prefixado 2025", 783.33, 13.10, 1080),
    new Investment(5, "Tesouro Selic 2025", 11868, 0.1, 1080)
];

function nextId() {
    const maiorId = investiments.reduce((acc, investiment) => {
        if(investiment.id > acc) {
            acc = investiment.id;
        }
        return acc;
    }, 0);
    return maiorId+1;
}

function isInvestmentValid({name, minValue, tax, time}) {
    return name && minValue && tax && time;
}

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

    if(index >= 0){
        investiments.splice(index, 1);
        return;
    }
    
    throw new ResponseException(404, "Investment Not Found");
};

const save = ({name, minValue, tax, time}) => {
    if(isInvestmentValid({name, minValue, tax, time})){
        const investiment = new Investment(nextId(), name, minValue, tax, time);
        investiments.push(investiment);
        return investiment;
    } 

    throw new ResponseException(400, "All attributes must be defined.");
};

const update = ({id}, {name, minValue, tax, time}) => {
    const investiment = investiments.find((investiment) => investiment.id == id);
    if(investiment != null) {
        if(isInvestmentValid({name, minValue, tax, time})){
            investiment.name = name;
            investiment.minValue = minValue;
            investiment.tax = tax;
            investiment.time = time;
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


