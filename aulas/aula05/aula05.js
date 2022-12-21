// console.log("Ola pagina!!!!!");

const spanElemento = document.getElementById("teste");
// spanElemento.style.color = "red";
//spanElemento.style.backgroundColor = "black";
// spanElemento.style.fontSize = "48px";
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
// divPrimeiraLinha.innerHTML = "<h1>TESTANDO INNER TEXT</h1>"
console.log(divPrimeiraLinha);

divPrimeiraLinha.setAttribute("curso-rasmoo", "o melhor");
console.log(divPrimeiraLinha.getAttribute("curso-rasmoo"));
divPrimeiraLinha.removeAttribute("curso-rasmoo");

const cancelButtonElement = document.querySelector("button.button_cancelar");
cancelButtonElement.classList.add("teste");
cancelButtonElement.classList.remove("teste");
console.log(cancelButtonElement.classList);

document.querySelectorAll("button.button").forEach((element) => {
    element.classList.remove("button");
    // element.style.backgroundColor = "purple";
    // element.style.color = "white";
});

const newH1Element = document.createElement("h1");
newH1Element.innerText = "OBA! FUI CRIADO A PARTIR DO JAVASCRIPT!";

const mainContainerElement = document.querySelector("div.main_container");
mainContainerElement.appendChild(newH1Element);
mainContainerElement.removeChild(newH1Element);

const buttonConfirmarElement = document.querySelector("button.button_confirmar");
buttonConfirmarElement.addEventListener("click", (event) => {
    console.log("Clicado...");
    console.log("O nome do butao é: ", event.target);
});

const h2SaldoElement = document.querySelector("h2#saldo");
h2SaldoElement.addEventListener("mouseover", () => {
    console.log("Opa! Olha a mãozinha ai rapaz!");
});

h2SaldoElement.addEventListener("mouseout", () => {
    console.log("Opa! Agora Melhorou!");
});

const inputElemet = document.querySelector("input[type='text']");

inputElemet.addEventListener("keydown", () => {
    console.log("KeyDown Com Sucesso");
});

inputElemet.addEventListener("keyup", () => {
    console.log("KeyUp Com Sucesso");
});



