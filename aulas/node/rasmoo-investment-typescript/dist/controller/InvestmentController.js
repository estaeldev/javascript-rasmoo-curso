"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvestmentService_1 = __importDefault(require("../service/InvestmentService"));
class InvestmentController {
    findAll(request, response) {
        const investimentFiltered = InvestmentService_1.default.findAll(request.query);
        response.json(investimentFiltered);
    }
    ;
    findById(request, response) {
        try {
            const { id } = request.params;
            const investiment = InvestmentService_1.default.findById(id);
            response.json(investiment);
        }
        catch (error) {
            response.status(error.statusCode).json({ message: error.message });
        }
    }
    ;
    deleteById(request, response) {
        try {
            const { id } = request.params;
            InvestmentService_1.default.deleteById(id);
            response.status(204).json();
        }
        catch (error) {
            response.status(error.statusCode).json({ message: error.message });
        }
    }
    ;
    save(request, response) {
        try {
            const investiment = InvestmentService_1.default.save(request.body);
            response.status(201).json(investiment);
        }
        catch (error) {
            response.status(error.statusCode).json({ message: error.message });
        }
    }
    ;
    update(request, response) {
        try {
            const { id } = request.params;
            const investiment = InvestmentService_1.default.update(id, request.body);
            response.json(investiment);
        }
        catch (error) {
            response.status(error.statusCode).json({ message: error.message });
        }
    }
    ;
}
exports.default = new InvestmentController();
