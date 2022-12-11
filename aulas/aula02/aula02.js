
let nome = "Sergio       ".trim();

console.log("Total de Letras: " + nome.length);
console.log("Concat: " + nome.concat(" ", "Resende"));
console.log("Maiscula: " + nome.toUpperCase());
console.log("Menuscula: " + nome.toLowerCase());


const teste =  nome.toUpperCase();
console.log(teste + " : " + teste.indexOf("S", 1));

console.log(nome.replace("Sergio", "Meireles"));

console.log("=====================================");

const frase = "Não desista!! Eu seu que você é capaz!!"
const fraseSplit = frase.split(" ");
console.log(fraseSplit);

console.log("=====================================");

const price = 9989.87;
console.log("O preço do Iphone é: " + price);
console.log(price.toFixed());
console.log(price.toString());

console.log();

const numeroNaN = Number("jdjjdj");
console.log(numeroNaN);

console.log(Number.isNaN(12));
console.log(Number.isNaN("1222"));

console.log();

console.log(Number.MAX_VALUE);





