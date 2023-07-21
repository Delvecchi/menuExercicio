import promptSync from "prompt-sync"

let prompt = promptSync()
let  numero;

export function exercicio4_for(numero) {

    numero = parseInt(prompt("Informe um número de 0 a 10: "))
for (let indice = 0; indice <= 10; indice++){
    let result = numero * indice
    console.log(numero + "x" + indice + " = " + result)
};
}