function soma(numero1, numero2) {
    return numero1 + numero2;
}

function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

function divisao(numero1, numero2) {
    if (numero2 === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return numero1 / numero2;
}