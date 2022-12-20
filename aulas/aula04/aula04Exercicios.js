// 01)

for(let i = 1; i < 11; i++) {
    console.log(`8 x ${i} = ${i * 8}`);
}

// 02)

const anoAtual = new Date().getFullYear();
const anoEmpresa = 1996;
const anoNascimento = 1961;
const idade = anoAtual - anoNascimento;
const anosTrabalhado = anoAtual - anoEmpresa;

if(idade >= 65) {
    console.log("Apto para se aposentar");
} else if(anosTrabalhado >= 30) {
    console.log("Apto para se aposentar");
} else if(idade >= 60 && anosTrabalhado >= 25){
    console.log("Apto para se aposentar");
} else {
    console.log("Não apto para se aposentar");
}

// 03) 

const tipoCombustivel = "G";
const litrosVendidos = 35;
const precoGasolina = 6.49;
const precoAlcool = 4.52;
let precoSemDeconto;
let desconto;

if(tipoCombustivel == "G" && litrosVendidos > 20) {
    precoSemDeconto = (litrosVendidos * precoGasolina).toFixed(2)
    desconto = precoSemDeconto * 0.06;
    console.log("Você iria pagar um valor de R$" + precoSemDeconto + ". Porém, ganhou um desconto de 6%; pagará: R$" + 
                (precoSemDeconto - desconto).toFixed(2));

} else if(tipoCombustivel == "G" && litrosVendidos <= 20) {
    precoSemDeconto = (litrosVendidos * precoGasolina).toFixed(2);
    desconto = precoSemDeconto * 0.04;
    console.log("Você iria pagar um valor de R$" + precoSemDeconto + ". Porém, ganhou um desconto de 4%; pagará: R$" + 
                (precoSemDeconto - desconto).toFixed(2));

} else if(tipoCombustivel == "A" && litrosVendidos > 20) {
    precoSemDeconto = (litrosVendidos * precoAlcool).toFixed(2);
    desconto = precoSemDeconto * 0.05;
    console.log("Você iria pagar um valor de R$" + precoSemDeconto + ". Porém, ganhou um desconto de 5%; pagará: R$" + 
    (precoSemDeconto - desconto).toFixed(2));

} else if(tipoCombustivel == "A" && litrosVendidos <= 20) {
    precoSemDeconto = (litrosVendidos * precoAlcool).toFixed(2);
    desconto = precoSemDeconto * 0.03;
    console.log("Você iria pagar um valor de R$" + precoSemDeconto + ". Porém, ganhou um desconto de 3%; pagará: R$" + 
    (precoSemDeconto - desconto).toFixed(2));
}

// 04)

const horasTrabalhadas = 48;
const salarioHora = 8;
const salarioSemHoraExtra = 40 * salarioHora;
const salarioComHoraExtra = salarioSemHoraExtra + ((horasTrabalhadas % 40) * (salarioHora + (salarioHora * 0.5)));
console.log("Salario sem hora extra: R$" + salarioSemHoraExtra);
console.log("Salario com hora extra: R$" + salarioComHoraExtra);

// 05)

const nota1 = 7.8;
const nota2 = 6.7;
const media = (nota1 + nota2) / 2;
console.log("Media do aluno: " + media);

if(media >= 7) {
    console.log("Aprovado");
} else if(media < 5) {
    console.log("Reprovado");
} else {
    console.log("Recuperação");
}

// 06)

const totalMercadorias = 128;
const precoUnitario = 29.90;
console.log("Valor total em estoque: " + (totalMercadorias * precoUnitario).toFixed(2));

// 07)

const celsius = 22;
console.log(celsius + " Celsius para Fahrenheit: " + (1.8 * celsius + 32).toFixed(2));
console.log(celsius + " Celsius para Kelvin: " + (celsius + 273.15).toFixed(2));



