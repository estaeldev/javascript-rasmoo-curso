class Aluno {
    nome;
    disciplinas;

    constructor(nome, disciplinas) {
        this.nome = nome;
        this.disciplinas = disciplinas;
    }

}

class Escola {
    nome;
    alunos;

    constructor(nome, alunos) {
        this.nome = nome;
        this.alunos = alunos;
    }

}

const a1 = new Aluno("Sergio", ["HTML", "CSS"]);
const a2 = new Aluno("Rafael", ["JS", "HTML"]);
const a3 = new Aluno("Fernando Franco", ["JAVA", "NODE"]);
const a4 = new Aluno("Fernando Nascimento", ["PHP", "SQL"]);
const a5 = new Aluno("Jefferson", ["ELIXIR", "GO"]);
const a6 = new Aluno("Pedro", ["JAVA", "C#"]);

const e1 = new Escola("Rasmoo", [a1, a2, a3, a4]);
const e2 = new Escola("Rasmoo Club", [a5, a6]);

// console.log("Escola 01: ", e1);
// console.log("Escola 02: ", e2);

const escolas = [e1, e2];

// 01) Retorne um array contendo somente os nomes das escolas
const escolasNomes = escolas.map((escola) => {
    return escola.nome;
});

console.log(escolasNomes);

// 02) Retorne um array contendo somente nomes de todos os alunos de todas as escolas
const alunosNomes = escolas.flatMap((escola) => {
    return escola.alunos;
}).map((aluno) => {
    return aluno.nome;
});

console.log(alunosNomes);

// 03) Retorne um array contendo somente os nomes de todas as disciplinas de todas as escolas
const todasDisciplinas = escolas.flatMap((escola) => {
    return escola.alunos;
}).flatMap((aluno) => {
    return aluno.disciplinas;
});

console.log(todasDisciplinas);


