const HealthController = require("../controller/HealthController");

module.exports = async (fastify) => {
    fastify.get("/health", HealthController.health);
}

