import { Router } from "express";
import healthController from "../controller/HealthController";

const healthRoutes = Router();

healthRoutes.get("/health", healthController.healthCheck);

export {
    healthRoutes
}


