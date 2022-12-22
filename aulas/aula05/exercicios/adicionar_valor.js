
const confirmarButtonElement = document.querySelector("button.button_confirmar");
const cancelarButtonElement = document.querySelector("button.button_cancelar");
const valorInputElement = document.querySelector("input[type='text']");
const displaySaldo = document.querySelector("h2.saldo_valor");
const smallElement = document.querySelector("small");
let saldoAtual = 0;

confirmarButtonElement.addEventListener("click", () => {
    // smallElement.style.display = "none";
    if(isNumberValid(valorInputElement.value)){
        saldoAtual += Number(valorInputElement.value);
        displaySaldo.innerText = saldoAtual;
    } else {
        // smallElement.style.display = "block"
        showMessage("Valor informado é inválido!");
    }

    limparInputValor();
    
});

cancelarButtonElement.addEventListener("click", () =>  {
    limparInputValor();
});

function limparInputValor(){
    valorInputElement.value = "";
}

function isNumberValid(number) {
    return +number;
}

function showMessage(message, type) {
    const small = document.querySelector("small");
    if(small) {
        small.remove();
    }
    
    const createSmallElement = document.createElement("small");
    createSmallElement.innerText = message;
    createSmallElement.style.color = "red";
    document.querySelector("div.linha_separador").after(createSmallElement);
}

