import { Router } from "express";
import investmentController from "../controller/InvestmentController";

const investmentRoute = Router();

investmentRoute.get("/investments", investmentController.findAll);
investmentRoute.get("/investments/:id", investmentController.findById);
investmentRoute.delete("/investments/:id", investmentController.deleteById);
investmentRoute.post("/investments", investmentController.save);
investmentRoute.put("/investments/:id", investmentController.update);

export {
    investmentRoute
}