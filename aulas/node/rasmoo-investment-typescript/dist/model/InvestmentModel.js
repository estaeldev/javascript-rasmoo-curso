"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Investment = void 0;
const uuid_1 = require("uuid");
class Investment {
    constructor(name, minValue, tax, time) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.minValue = minValue;
        this.tax = tax;
        this.time = time;
    }
    isValid() {
        return this.name && this.minValue && this.tax && this.time;
    }
}
exports.Investment = Investment;
