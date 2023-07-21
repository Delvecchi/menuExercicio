import promptSync from "prompt-sync"
let prompt = promptSync()

let numero1;
let numero2;


export function exercicio5_if(numero1, numero2) {
    numero1 = parseFloat(prompt("Informe um número: "))
    numero2 = parseFloat(prompt("Informe um outro número: "))

    if (numero1 > numero2) {
        console.log("O primeiro número(" + numero1 + ") é maior que o segundo núnemro(" + numero2 + ")!")
    }
    else if (numero1 == numero2) {
        console.log("O primeiro número(" + numero1 + ") é igual ao segundo número(" + numero2 + ")!")
    }
    else {
        console.log("O segundo número(" + numero2 + ") é maior que o primeiro número(" + numero1 + ")!")
    }
}