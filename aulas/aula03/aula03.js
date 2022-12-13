
const array = ["Pedro", "Rafael", "Fernando Franco", "Fernando Nascimento", "Jefferson", "Sergio"]

array.push("Felipe");
console.log(array);
console.log(array.length);

array.unshift("Davi");
console.log(array);

array.pop();
console.log(array);

array.shift();
console.log(array);

console.log(array.slice(2, 4));

array.splice(0, 2)

console.log(array);

console.log(array.indexOf("Jefferson"));

array.push("Fernando Franco")
console.log(array);

console.log(array.lastIndexOf("Fernando Franco"));

const galeraFaltou = ["Rebecca", "Andreza"];
const novoArray = array.concat(galeraFaltou);

console.log(novoArray);
console.log(novoArray.join(", "));
console.log(novoArray.includes("Rebecca"));

const brands = ["BMW", "AUDI", "McDonald", "Henring", ["Armani", "Lacoste"], ["Fiat"], [["Teste"]]];
console.log(brands.flat(2));

console.log(brands.toString());

const findIndexBrands = brands.findIndex((value, index, obj) => {

    console.log("Value: " + value);
    console.log("Index: "+ index);
    console.log("Obj: " + obj);

})
console.log(findIndexBrands);


class Cliente {
    nome;
    idade;
    contatos;

    constructor(nome, idade, contatos){
        this.nome = nome;
        this.idade = idade;
        this.contatos = contatos;
    }
    
}

const c1 = new Cliente("Pedro", 29, ["91981389856", "91981389857"]);
const c2 = new Cliente("Felipe", 30, ["91981389852", "91981389859"]);
const c3 = new Cliente("Sergio", 28, ["91981389854", "91981389853"]);
const c4 = new Cliente("Fernando Franco", 27, ["91981389851", "91981389852"]);
const c5 = new Cliente("Fernando Nascimento", 25, ["91981389855", "91981389858"]);
const c6 = new Cliente("Jefferson", 26, ["91981389857", "91981389853"]);
const c7 = new Cliente("Rafael", 23, ["91981389850", "91981389851"]);

const clientes = [c1, c2, c3, c4, c5, c6, c7];

const findIndexClientes = clientes.findIndex((elem) => {
    return elem.nome == "Sergio";
});

console.log(findIndexClientes);

clientes.forEach((item) => {
    // console.log(item.nome);
});

const clientesFiltrados = clientes.filter((cliente) => {
    return cliente.idade > 25;
});

console.log(clientesFiltrados);

const clientesMap = clientes.map((cliente) => {
    return cliente.nome;
});

console.log(clientesMap);

const clientesFlatMap = clientes.flatMap((cliente) => {
    return cliente.contatos;
});

console.log(clientesFlatMap);


class Produto {
    nome;
    categorias;

    constructor(nome, categorias) {
        this.nome = nome;
        this.categorias = categorias;
    }

}

const p1 = new Produto("Iphone", [
    {nome: "SMARTPHONE", subcategorias: ["Bluetooh", "Wi-Fi"]},
    {nome: "ELETRONICO", subcategorias: ["Pinha", "Tomanda"]}
]);

const p2 = new Produto("Shampoo", [
    {nome: "BELEZA", subcategorias: ["Bonite", "Lindi"]},
    {nome: "HIGIENE", subcategorias: ["Sujo", "Limpo"]}
]);

const produtos = [p1, p2];

const subcategorias = produtos.flatMap((produto) => {
    return produto.categorias;

}).flatMap((categoria) => {
    return categoria.subcategorias;

});

console.log(subcategorias);

const nomesCategorias = produtos.flatMap((produto) => {
    return produto.categorias;

}).map((categorias) => {
    return categorias.nome;
});

console.log(nomesCategorias);










