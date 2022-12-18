
// Operadores Aritméticos
const aritmetico1 = 10 + 5; // 15
const aritmetico2 = 10 - 5; // 5
const aritmetico3 = 10 * 5; // 50
const aritmetico4 = 10 / 5; // 2

const aritmetico5 = 12 % 5;
console.log(aritmetico5);

// Incremento
let x = 10;
console.log(x++);

// Decremento
let y = 10;
console.log(--y);

// Exponenciação
let z = 10;
console.log(z**2);

// Operadores de String

const nome = "Sergio"
console.log(nome + "Resende");
console.log(nome);

// Operadores de atribuição
let preco = 100;
console.log(preco += 5);
console.log(preco -= 10);
console.log(preco *= 2);
console.log(preco /= 2);
console.log(preco %= 4);
console.log(preco ** 3);

// Operadores de Comparação
console.log(10 == 10);
console.log(8 != 10);
console.log(8 == '8');
console.log(8 === '8');
console.log(15 !== '15');
console.log(100 > 98);
console.log(100 < 98);
console.log(100 >= 100);
console.log(200 <= 199);

// Operadores Logicos
const notebook = true;
const dinheiro = true;

// AND
console.log("Posso comprar o notbook: ", notebook && dinheiro);

// OR
console.log("Posso comprar o notbook 2: ", notebook || dinheiro);

// NOT
console.log("A loja está vendendo notebook: ", !notebook);


// Operadores Condicionais (ternário)
const idadeAna = 17;
console.log(idadeAna >= 18 ? "Ela pode comprar a bedida" : "Proibida de comprar a bebida!");

// Falsy e Trupy

// null = false
// undefined = false
// 0 = false
// NaN = false
// "" =  false

// "qualquer valor" = true
// {} = true
// [] = true
// 156 = true
// 12.655 = true
// -97 = true

// Estruturas condicionais e controle de fluxo

// If...else
const media = 8;

if (media >= 8) {
    console.log('Aprovado!!!!');
} else if (media > 5 && media < 8) {
    console.log('Em recuperação!!!!');
} else {
    console.log('Reprovado!');
}

// Switch
const situacao = 'APROVADO';

switch (situacao) {
    case 'APROVADO': {
        console.log('Logado');
        break;
    }
    case 'EM_ANALISE':
    case 'PENDENTE': {
        console.log('Aguardando aprovação.');
        break;
    }
    case 'REPROVADO': {
        console.log('Tente novamente daqui a 90 dias.');
        break;
    }
    default: {
        console.log('Ixi!! Não sei que fruta é essa.');
    }
}

// Try...catch
const aluno = undefined;

try {
    if (!aluno) {
        throw new SyntaxError('Erro interno. Por favor tente novamente mais tarde.'); s
    }

    if (!aluno.nome || !aluno.idade) {
        throw new TypeError('Usuário não preencheu todas as informações obrigatórias.');
    }

    console.log('Aluno salvo com sucesso!');
    console.log('Aluno: ', aluno);
} catch (error) {
    if (error instanceof TypeError) {
        console.log(`Erro ocorrou do lado do cliente: ${error.message}`);
    }

    if (error instanceof SyntaxError) {
        console.log(`Programador fez besteira: ${error.message}`);
    }

} finally {
    console.log('Sempre serei executado!');
}


// Estruturas de repetição
const paises = ['Brasil', 'Argentina', 'Alemanha', 'Italia'];
paises.forEach((pais) => {
    console.log(pais);
});

console.log('------------------------------------');

// For
for (let i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}

console.log('------------------------------------');

// For of
for (let pais of paises) {
    console.log(pais);
}

console.log('------------------------------------');

function Cliente(nome, email, idade) {
    this.nome = nome;
    this.email = email;
    this.idade = idade;
}

const clientePedro = new Cliente('Pedro', 'pedro@gmail.com', 30);

// For in
for (let prop in clientePedro) {
    console.log(prop, clientePedro[prop]);
}

console.log('------------------------------------');

// While
let count = 0;

while (count < 10) {
    console.log(count);
    count++;
}

console.log('------------------------------------');

// Do while
do {
    console.log('Opa!');
    count++;
} while (count < 20); 






