"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthRoutes = void 0;
const express_1 = require("express");
const HealthController_1 = __importDefault(require("../controller/HealthController"));
const healthRoutes = (0, express_1.Router)();
exports.healthRoutes = healthRoutes;
healthRoutes.get("/health", HealthController_1.default.healthCheck);
