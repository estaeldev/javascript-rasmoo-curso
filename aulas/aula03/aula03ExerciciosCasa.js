// 01)

const word = "Triângulo"
console.log(word.split(""));

// 02)

const total = Math.floor(Math.random() * 100);
const array = new Array(total);
console.log(array.length);

// 03)

const colors = ["Red", "Yellow", "Blue", "Red", "Green"];

// a)
colors.push("Pink", "Brown");
console.log(colors);

// b)
colors.unshift("Purple");
console.log(colors);

// c)
colors.pop();
console.log(colors);

// d)
colors.shift();
console.log(colors);

// e)
console.log(colors.indexOf("Red"));

// f)
console.log(colors.lastIndexOf("Red"));

// g)
const newColors = ["Gold", "Silver", "Crystal"];
newColors.forEach((cor) => {
    colors.push(cor);
});
console.log(colors);

// h)
console.log(colors.join(" / "));

// i)
console.log(colors.includes("Blue"));

// j)
console.log(colors.toString());

// l)
colors.splice(colors.indexOf("Blue"), 1);
console.log(colors);

// 04)

const corBrands = ["Fiat", "BMW", "Pegeaut", ["Honda", "Volkswagen"], [["Audi", "Hyundai"]]];
const corBrandsUni = corBrands.flat(2);
console.log(corBrandsUni);

// 05)

class Produto {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

}

const p1 = new Produto("Iphone 13", 9949.90);
const p2 = new Produto("Playstation 5", 4499.99);
const p3 = new Produto("Nitendo Switch", 2399.99);
const p4 = new Produto("Xbox Series X", 5489.00);
const p5 = new Produto("Master System 3", 259.90);

const products = [p1, p2, p3, p4, p5];

console.log(products);

// a)
const produtoIndex = products.findIndex((produto) => {
    return produto.name == "Xbox Series X";
});
console.log(produtoIndex);

// b)
const produtosPreco = products.find((produto) => {
    return produto.price == 2399.99;
});
console.log(produtosPreco);

// c)
const produtosMais3000 = products.filter((produto) => {
    return produto.price > 3000;
});
console.log(produtosMais3000);

// d)
products.forEach((produto) => {
    console.log(produto.name);
});

// e)
const todosPrecos = products.reduce((acc, produto) => acc += produto.price, 0);
console.log(todosPrecos);

// f)
console.log(products.every((produto) => produto.price > 300));

// g)
console.log(products.some((produto) => produto.price > 6000));


// 06)

class Car {
    name;
    brand;
    price;

    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

}

class Dealership {
    name;
    cars;

    constructor(name, cars) {
        this.name = name;
        this.cars = cars;
    }

}

const c1 = new Car("M3 Competition", "BMW", 799950.90);
const c2 = new Car("Civic Sport CVT 2020", "Honda", 122990.90);
const c3 = new Car("Fiat 1.5 EXL CVT 2020", "Honda", 99900.90);
const c4 = new Car("WR-V 1.5 EXL CVT 2021", "Honda", 114990.90);
const c5 = new Car("Leaf 40kWH Tekna 2022", "Nissan", 289900.90);
const c6 = new Car("Kicks 1.6 Advance CVT 2022", "Nissan", 117090.90);

const d1 = new Dealership("BMW Shop", [c1]);
const d2 = new Dealership("HONDA Shop", [c2, c3, c4]);
const d3 = new Dealership("NISSAN Shop", [c5, c6]);

const dealerships = [d1, d2, d3];

console.log(dealerships);

// a)
const dealershipsNames = dealerships.map((dealership) => dealership.name);
console.log(dealershipsNames);

// b)
const carNames = dealerships.flatMap((dealerships) => dealerships.cars).map((car) => car.name);
console.log(carNames);

// c)
const brandsNames = dealerships.flatMap((dealership) => dealership.cars)
                    .filter((car) => car.price > 200000)
                    .map((car) => car.brand);

console.log(brandsNames);



