import { Request, Response } from "express";
import investmentService from "../service/InvestmentService";

class InvestmentController {
    
    findAll(request:Request, response:Response) {
        const investimentFiltered = investmentService.findAll(request.query);
        response.json(investimentFiltered);
    };
    
    findById(request:Request, response:Response) {
        try {
            const {id} = request.params;
            const investiment = investmentService.findById(id);
            response.json(investiment);
        } catch (error: any) {
            response.status(error.statusCode).json({message: error.message});
        }
    };
    
    deleteById(request:Request, response:Response) {
        try {
            const {id} = request.params;
            investmentService.deleteById(id);
            response.status(204).json();
        } catch (error:any) {
            response.status(error.statusCode).json({message: error.message});
        }
    };
    
    save(request:Request, response:Response) {
        try {
            const investiment = investmentService.save(request.body);
            response.status(201).json(investiment);
        } catch (error:any) {
            response.status(error.statusCode).json({message: error.message});
        }
    };
    
    update(request:Request, response:Response) {
        try {
            const {id} = request.params;
            const investiment = investmentService.update(id, request.body);
            response.json(investiment);
        } catch (error:any) {
            response.status(error.statusCode).json({message: error.message});
        }
    };



}   

export default new InvestmentController();
