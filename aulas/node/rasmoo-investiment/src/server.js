const HealthRoute = require('./rotas/HealthRoute');
const InvestmentRoute = require('./rotas/InvestmentRoute');

const fastify = require('fastify')({
    logger: true
});

fastify.register(HealthRoute);
fastify.register(InvestmentRoute);

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
});



