// Faça um programa que receba um número do usuário e mostre
// no console a contagem regressiva até 0.
// console.log("Exercicio 9")
import promptSync from "prompt-sync"
let prompt = promptSync()
let numero;
export function exercicio4_while(numero) {
    numero = parseInt(prompt("Informe um numero: "))
    while (numero >= 0) {
        console.log(numero)
        numero--
    }
}