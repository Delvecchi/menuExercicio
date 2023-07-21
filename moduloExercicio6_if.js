import promptSync from "prompt-sync"
let prompt = promptSync()

let nota1; 
let nota2; 
let nota3; 
let nota4; 

let resultado; 

export function exercicio6_if(nota1,nota2,nota3,nota4) {
    nota1 = parseFloat(prompt("Informe a primeira nota: "))
    nota2 = parseFloat(prompt("Informe a segunda nota: "))
    nota3 = parseFloat(prompt("Informe a terceira nota: "))
    nota4 = parseFloat(prompt("Informe a quarta nota: "))

    resultado = (nota1 + nota2 + nota3 + nota4) / 4

    if (resultado >= 7) {
        console.log("APROVADO! Nota final " + resultado + "!")
    }
    else if (resultado >= 5 && resultado < 7) {
        console.log("RECUPERAÇÃO! Nota final " + resultado + "!")
    }
    else {
        console.log("REPROVADO! Nota final " + resultado + "!")
    }
}