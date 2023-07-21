import promptSync from "prompt-sync"
let prompt = promptSync()

let numero;

export function exercicio3_if(numero) {
    numero = parseInt(prompt("Informe um número inteiro: "))
    if (numero > 0) {
        console.log("O número informado(" + numero + ") é positivo")
    }
    else if (numero == 0) {
        console.log("O número informado é o zero, um número neutro")
    }
    else {
        console.log("O número informado(" + numero + ") é negativa")
    }
}