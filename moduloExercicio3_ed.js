import promptSync from "prompt-sync"
let prompt = promptSync()

let numero1;
let numero2;
let numero3;

export function exercicio3_ed(numero1, numero2, numero3) {
    numero1 = parseFloat(prompt("Informe um número: "))
    numero2 = parseFloat(prompt("Informe um segundo número: "))
    numero3 = parseFloat(prompt("Informe um terceiro número: "))

    if (numero1 < numero2 && numero2 < numero3) {
        console.log("Os números informados estão em ordem crescente")
    } else {
        console.log("Os números informados não estão em ordem crescente")
    }
}