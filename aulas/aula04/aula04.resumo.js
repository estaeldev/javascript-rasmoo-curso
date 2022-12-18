// Operadores aritméticos
/*
    (+) = Soma
    (-) = Subtração
    (*) = Multiplicação
    (/) = Divisão
    (%) = Módulo (Retorna o inteiro restante da divisão de dois números)
   console.log(12 % 5); // Resta 2
    (++) = Incremento (Adiciona um ao seu operando)
    let x = 0;
    console.log(++x); // Retorna o valor após a adição
    console.log(x++); // Retorna o valor antes da adição
    (--) = Decremento (Subtrai um do seu operando)
    let y = 0;
    console.log(--y); // Retorna o valor após a subtração
    console.log(y--); // Retorna o valor antes da subtração
    (**) = Exponenciação (Calcula a base elevada á potência do expoente)
    console.log(4 ** 2); // 16
*/


// Operadores de string
/*
    // Concatenação
    (+) // Concatena dois valores string, retornando outra string que é a união dos dois operandos
*/


// Operadores de atribuição
/*
    x = 1; // Atribuição
    // Atribuição de adição
    x += 1;
    x = x + 1;
    // Atribuição de subtração
    x -= 1;
    x = x - 1;
    // Atribuição de multiplicação
    x *= 2;
    x = x * 2;
    // Atribuição de divisão
    x /= 2;
    x = x / 2;
    // Atribuição de resto
    x %= 2;
    x = x % 2;
    // Atribuição exponencial
    x **= 2;
    x = x ** 2;
*/


// Operadores de comparação
/*
    // Igual
    (==) // Retorna verdadeiro caso os operandos sejam iguais
    // Não igual
    (!=) // Retorna verdadeiro caso os operandos não sejam iguais
    // Estritamente igual
    (===) // Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo
    // Estritamente não igual
    (!==) // Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo
    // Maior que
    (>) // Retorna verdadeiro caso o operando da esquerda seja maior que o da direita
    // Menor que
    (<) // Retorna verdadeiro caso o operando da esquerda seja menor que o da direita
    // Maior ou igual que
    (>=) // Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita
    // Menor ou igual que
    (<=) // Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita
*/


// Operadores lógicos
/*
    && (AND)
    || (OR)
    ! (NOT)
*/


// Operador condicional (ternário)
/*
    condição ? valor1 : valor2;
    Se condicao for verdadeira, o operador terá o valor de valor1, senão, terá o valor de valor2
*/


// Falsy e Truthy
/*
    Um valor falsy é um valor que se traduz em falso quando avaliado em um contexto booleano.
        if (false)
        if (null)
        if (undefined)
        if (0)
        if (NaN)
        if ('')
    Um valor truthy é um valor que se traduz em verdadeiro quando avaliado em um contexto booleano.
        if (true)
        if ({})
        if ([])
        if ("foo")
        if (21)
        if (-202)
        if (3.1415926535)
        if (-3.1415926535)
*/


// Estruturas condicionais
/*
    // If...else
    A condicional if executa a instrução, dentro do bloco, se determinada condição for verdadeira.
    Se for falsa, executa a instrução dentro de else.
    if (condição) {
        instrução1
    } else {
        instrução2
    }
    if (condição1) {
        instrução1
    } else if (condição2) {
        instrução2
    } else {
        instrução3
    }
    // Switch
    O switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa
    as instruções associadas ao case.
    switch (expressão) {
        case valor1: {
            instrução...
            break;
        }
        case valor2: {
            instrução...
            break;
        }
        case valorN: {
            instrução...
            break;
        }
        default {
            instrução...
        }
    }
    // Try...catch
    try {
        instrução para um código que tem a possibilidade de lançar error...
    } catch(error) {
        instrução em caso de error...
    }
*/


// Estruturas de repetição
/*
    // For
    A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula.
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // For of
    O loop for...of percorre objetos iterativos, como o Array por exemplo.
    
    const names = ['Pedro', 'Sergio', 'Jefferson', 'Fernando', 'Rebecca', 'Rafael', 'Cosmo'];
    for (let name of names) {
        console.log(name);
    }
    // For in
    O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.
    const client = {
        name: 'Felipe',
        email: 'felipe@gmail.com',
        age: 31
    }
    for (const prop in cliente) {
        console.log(prop, cliente[prop]);
    }
    // While
    A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira.
    let count = 0;
    while (count < 5) {
        console.log(count);
        count++;
    }
    // Do while
    A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false). 
    A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.
    let number = 0;
    do {
        console.log('The number is: ', number);
        number++;
    } while (number != 5);
*/