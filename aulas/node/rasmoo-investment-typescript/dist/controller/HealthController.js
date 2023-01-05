"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HealthController {
    healthCheck(request, response) {
        response.json({ message: "Server is up and running." });
    }
}
exports.default = new HealthController();
