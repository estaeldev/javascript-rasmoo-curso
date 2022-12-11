
class Endereco {
    cidade;
    estado;
    pais;
    
    constructor(cidade, estado, pais) {
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
    }

}

class Aluno {
    nome;
    email;
    dataNascimento;
    endereco

    constructor(nome, email, dataNascimento, endereco) {
        this.nome = nome;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
    }

}


const enderecoPedro = new Endereco("Nova Timboteua", "Pará", "BR");
const pedro = new Aluno("Pedro", "pedro@gmail.com", "28/08/1992", enderecoPedro);

console.log(pedro);



















