const InvestmentService = require("../service/InvestmentService");

const findAll = (request, reply)  => {
    const investimentFiltered = InvestmentService.findAll(request.query);
    reply.send(investimentFiltered);
};

const findById = (request, reply) => {
    try {
        const investiment = InvestmentService.findById(request.params);
        reply.send(investiment);
    } catch (error) {
        reply.status(error.statusCode).send({message: error.message});
    }
};

const deleteById = (request, reply) => {
    try {
        InvestmentService.deleteById(request.params);
        reply.status(204).send();
    } catch (error) {
        reply.status(error.statusCode).send({message: error.message});
    }
};

const save = (request, reply) => {
    try {
        const investiment = InvestmentService.save(request.body);
        reply.status(201).send(investiment);
    } catch (error) {
        reply.status(error.statusCode).send({message: error.message});
    }
};

const update = (request, reply) => {
    try {
        const investiment = InvestmentService.update(request.params, request.body);
        reply.send(investiment);
    } catch (error) {
        reply.status(error.statusCode).send({message: error.message});
    }
};


module.exports = {
    findAll,
    findById,
    deleteById,
    save,
    update
}
