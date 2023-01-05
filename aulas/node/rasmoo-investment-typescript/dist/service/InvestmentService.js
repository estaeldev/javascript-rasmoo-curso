"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InvestmentModel_1 = require("../model/InvestmentModel");
const ResponseErro_1 = require("../error/ResponseErro");
class InvestmentService {
    constructor() {
        this.investiments = [
            new InvestmentModel_1.Investment("CDB - Pós-Fixado", 1000, 103.75, 30),
            new InvestmentModel_1.Investment("CDB - Pós-Fixado", 1000, 104.25, 60),
            new InvestmentModel_1.Investment("CDB - Pós-Fixado", 5000, 112, 180),
            new InvestmentModel_1.Investment("Tesouro Prefixado 2025", 783.33, 13.10, 1080),
            new InvestmentModel_1.Investment("Tesouro Selic 2025", 11868, 0.1, 1080)
        ];
    }
    findAll({ name, minValue, maxValue, minTax, time }) {
        const investimentFiltered = this.investiments.filter((investiment) => {
            let condition = true;
            if (name) {
                condition && (condition = investiment.name.startsWith(name));
            }
            if (minValue) {
                condition && (condition = investiment.minValue >= minValue);
            }
            if (maxValue) {
                condition && (condition = investiment.minValue < maxValue);
            }
            if (minTax) {
                condition && (condition = investiment.tax >= minTax);
            }
            if (time) {
                condition && (condition = investiment.time >= time);
            }
            return condition;
        });
        return investimentFiltered;
    }
    ;
    findById(id) {
        const investiment = this.investiments.find((investiment) => investiment.id === id);
        if (investiment != null) {
            return investiment;
        }
        throw new ResponseErro_1.ResponseErro(404, "Investment Not Found");
    }
    ;
    deleteById(id) {
        const index = this.investiments.findIndex((investiment) => investiment.id === id);
        if (index < 0) {
            throw new ResponseErro_1.ResponseErro(404, "Investment Not Found");
        }
        this.investiments.splice(index, 1);
    }
    ;
    save({ name, minValue, tax, time }) {
        const investiment = new InvestmentModel_1.Investment(name, minValue, tax, time);
        if (investiment.isValid()) {
            this.investiments.push(investiment);
            return investiment;
        }
        throw new ResponseErro_1.ResponseErro(400, "All attributes must be defined.");
    }
    ;
    update(id, { name, minValue, tax, time }) {
        const investiment = this.investiments.find((investiment) => investiment.id === id);
        if (investiment != null) {
            investiment.name = name;
            investiment.minValue = minValue;
            investiment.tax = tax;
            investiment.time = time;
            if (investiment.isValid()) {
                return investiment;
            }
            else {
                throw new ResponseErro_1.ResponseErro(400, "All attributes must be defined.");
            }
        }
        throw new ResponseErro_1.ResponseErro(404, "Investment Not Found");
    }
    ;
}
exports.default = new InvestmentService();
