import promptSync from "prompt-sync"
let prompt = promptSync()

let numero;

export function exercicio2_ed(numero) {
    numero = parseInt(prompt("Informe um númer de 1 a 7 que represente um dia da semana: "))
    switch (numero) {

        case 1:

            console.log("Segunda-feira");

            break;

        case 2:

            console.log("Terça-feira");

            break;

        case 3:

            console.log("Quarta-feira");

            break;

        case 4:

            console.log("Quinta-feira");

            break;

        case 5:

            console.log("Sexta-feira");

            break;

        case 6:

            console.log("Sábado");

            break;

        case 7:

            console.log("Domingo");

            break;

        default:

            console.log("O número informado não representa nenhum dia da semana");

            break;

    }
}