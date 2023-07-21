import promptSync from "prompt-sync"
let prompt = promptSync()

let numero;

export function exercicio4_if(numero) {
    numero = parseInt(prompt("Informe um número inteiro: "))
    let numero2 = numero % 2
    if (numero2 == 0) {
        console.log("O número informado(" + numero + ") é par")
    } else {
        console.log("O número informado(" + numero + ") não é par")
    }
}