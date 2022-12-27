class Investment {
    id;
    name;
    minValue;
    tax;
    time;

    constructor(id, name, minValue, tax, time){
        this.id = id;
        this.name = name;
        this.minValue = minValue;
        this.tax = tax;
        this.time = time;
    }

}

const investiments = [
    new Investment(1, "CDB - Pós-Fixado", 1000, 103.75, 30), 
    new Investment(2, "CDB - Pós-Fixado", 1000, 104.25, 60),
    new Investment(3, "CDB - Pós-Fixado", 5000, 112, 180),
    new Investment(4, "Tesouro Prefixado 2025", 783.33, 13.10, 1080),
    new Investment(5, "Tesouro Selic 2025", 11868, 0.1, 1080)
];

function nextId() {
    const maiorId = investiments.reduce((acc, investiment) => {
        if(investiment.id > acc) {
            acc = investiment.id;
        }
        return acc;
    }, 0);
    return maiorId+1;
}

function isInvestmentValid({name, minValue, tax, time}) {
    return name && minValue && tax && time;
}

module.exports = async (fastify) => {

    fastify.get("/health", (request, reply) => {
        reply.send({message: "Server is up and running."});
    });

    fastify.get("/investments", function (request, reply) {
        reply.send(investiments);
    });

    fastify.get("/investments/:id",  (request, reply) => {
        const {id} = request.params;
        const investiment = investiments.find((investiment) => investiment.id == id);

        if(investiment != null){
            reply.send(investiment);
        }

        reply.status(404).send({message: "Investment Not Found"});
    });
    
    fastify.delete("/investments/:id", (request, reply) => {
        const {id} = request.params;
        const index = investiments.findIndex((investiment) => investiment.id == id);

        if(index >= 0){
            investiments.splice(index, 1);
            reply.status(204).send();
        }

        reply.status(404).send({message: "Investment Not Found"});
    });

    fastify.post("/investments", (request, reply) => {
        const {name, minValue, tax, time} = request.body;
        
        if(isInvestmentValid(request.body)){
            const investiment = new Investment(nextId(), name, minValue, tax, time);
            investiments.push(investiment);
            reply.status(201).send(investiment);
        }
        
        reply.status(400).send({message: "Preencha todos os campos."})

    });
    
    fastify.put("/investments/:id", (request, reply) => {
        const {id} = request.params;
        const investiment = investiments.find((investiment) => investiment.id == id);

        if(investiment != null) {
            if(isInvestmentValid(request.body)){
                const {name, minValue, tax, time} = request.body;
                investiment.name = name;
                investiment.minValue = minValue;
                investiment.tax = tax;
                investiment.time = time;
                reply.send(investiment);
            } else {
                reply.status(400).send({message: "Preencha todos os campos."});
            }
        }

        reply.status(404).send({message: "Investment Not Found"});
        
    });
    
}


