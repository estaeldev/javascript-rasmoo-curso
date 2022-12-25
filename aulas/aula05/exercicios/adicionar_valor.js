
const confirmarButtonElement = document.querySelector("button.button_confirmar");
const cancelarButtonElement = document.querySelector("button.button_cancelar");
const valorInputElement = document.querySelector("input[type='text']");
const displaySaldo = document.querySelector("h2.saldo_valor");
const smallElement = document.querySelector("small");
let saldoAtual = 0;

confirmarButtonElement.addEventListener("click", () => {
    // smallElement.style.display = "none";
    deleteMessage();
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

valorInputElement.addEventListener("keydown", (event) => {
    if(event.keyCode > 31 && (event.keyCode > 105 || event.keyCode < 97)){
        event.preventDefault();
    }
});

function limparInputValor() {
    valorInputElement.value = "";
}

function deleteMessage(){
    const small = document.querySelector("small");
    if(small) {
        small.remove();
    }
}

function isNumberValid(number) {
    return +number;
}

function showMessage(message, type) {
    const createSmallElement = document.createElement("small");
    createSmallElement.innerText = message;
    createSmallElement.style.color = "red";
    document.querySelector("div.linha_separador").after(createSmallElement);
}

