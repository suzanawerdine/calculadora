const readline = require("readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite o primeiro número:\n> ", (numero1) => {

    leitor.question("Escolha a operação (+, -, *, /): ", (operacao) => {

        leitor.question("Digite o segundo número: ", (numero2) => {

            const num1 = Number(numero1);
            const num2 = Number(numero2);
            let resultado = null;

            if (operacao === "+") {
                resultado = soma(num1, num2);
            } else if (operacao === "-") {
                resultado = subtracao(num1, num2);
            } else if (operacao === "*") {
                resultado = multiplicacao(num1, num2);
            } else if (operacao === "/") {
                try {
                    resultado = divisao(num1, num2);
                } catch (error) {
                    console.error(error.message);
                }
            }
            if (resultado !== null) {
                console.log("Resultado:", resultado);
            }

            leitor.close();
        });

    });
});