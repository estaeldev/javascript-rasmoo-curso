const InvestmentController = require("../controller/InvestmentController");

module.exports = async (fastify) => {    
    fastify.get("/investments", InvestmentController.findAll);
    fastify.get("/investments/:id", InvestmentController.findById);
    fastify.delete("/investments/:id", InvestmentController.deleteById);
    fastify.post("/investments", InvestmentController.save);
    fastify.put("/investments/:id", InvestmentController.update);
}

