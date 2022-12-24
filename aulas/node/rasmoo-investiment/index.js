const fastify = require('fastify')({
    logger: true
});

fastify.get('/teste', function (request, reply) {
    reply.send({ message: 'Hello World!' })
});

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
});

