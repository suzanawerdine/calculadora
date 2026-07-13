export function soma(numero1, numero2) {
    return numero1 + numero2;
}

export function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

export function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

export function divisao(numero1, numero2) {
    if (numero2 === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return numero1 / numero2;
}