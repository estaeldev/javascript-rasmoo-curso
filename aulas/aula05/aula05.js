// console.log("Ola pagina!!!!!");

const spanElemento = document.getElementById("teste");
spanElemento.style.color = "red";
spanElemento.style.backgroundColor = "black";
spanElemento.style.fontSize = "48px";
// console.log(spanElemento);

const buttonsElement = document.getElementsByClassName("button");
// console.log(buttonsElement);

const divsElement = document.getElementsByTagName("div");
Array.from(divsElement).forEach((div) => {
    // console.log(div);
});
// console.log(divsElement);
for(const element of divsElement) {
    // console.log(element);
}

const allButtonsElements = document.querySelectorAll("button");
// console.log(allButtonsElements);
allButtonsElements.forEach((element) => {
    // console.log(element);
});

const divPrimeiraLinha = document.querySelector("div.primeira_linha");
console.log(divPrimeiraLinha.innerText);
console.log(divPrimeiraLinha.innerHTML);
divPrimeiraLinha.innerHTML = "<h1>TESTANDO INNER TEXT</h1>"
console.log(divPrimeiraLinha);

