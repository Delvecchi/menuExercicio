// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos. 
// Exiba uma mensagem indicando se a pessoa é maior de idade ou não.
import promptSync from "prompt-sync"
let prompt = promptSync()

let ano_nascimento;

export function exercicio4_ed(ano_nascimento) {
ano_nascimento = parseInt(prompt("Informe o ano do seu nascimento: "))
let resultado = 2023 - ano_nascimento
if(resultado >= 18) {
    console.log("A pessoa que informou a idade é maior de idade!")
} else {
    console.log("A pessoa que informou a idade não é maior de idade!")
}
}