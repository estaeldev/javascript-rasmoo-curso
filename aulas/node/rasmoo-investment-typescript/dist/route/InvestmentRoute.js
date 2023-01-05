"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.investmentRoute = void 0;
const express_1 = require("express");
const InvestmentController_1 = __importDefault(require("../controller/InvestmentController"));
const investmentRoute = (0, express_1.Router)();
exports.investmentRoute = investmentRoute;
investmentRoute.get("/investments", InvestmentController_1.default.findAll);
investmentRoute.get("/investments/:id", InvestmentController_1.default.findById);
investmentRoute.delete("/investments/:id", InvestmentController_1.default.deleteById);
investmentRoute.post("/investments", InvestmentController_1.default.save);
investmentRoute.put("/investments/:id", InvestmentController_1.default.update);
