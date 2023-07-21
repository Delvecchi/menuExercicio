// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.

// console.log("Exercicio 10")

import promptSync from "prompt-sync"

let prompt = promptSync()
let numero ;
export function exercicio5_while(numero) {
do {
    numero = prompt("Digite um numero: ")
} while (numero != 0);
}