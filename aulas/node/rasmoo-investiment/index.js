class Investment {
    name;
    minValue;
    tax;
    time;

    constructor(name, minValue, tax, time){
        this.name = name;
        this.minValue = minValue;
        this.tax = tax;
        this.time = time;
    }

}

const investiments = [
    new Investment("CDB - Pós-Fixado", 1000, 103.75, 30), 
    new Investment("CDB - Pós-Fixado", 1000, 104.25, 60),
    new Investment("CDB - Pós-Fixado", 5000, 112, 180),
    new Investment("Tesouro Prefixado 2025", 783.33, 13.10, 1080),
    new Investment("Tesouro Selic 2025", 11868, 0.1, 1080)
];


const fastify = require('fastify')({
    logger: true
});

fastify.get('/investimentos', function (request, reply) {
    reply.send(investiments);
});

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
});



