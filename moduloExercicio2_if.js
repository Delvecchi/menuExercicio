import promptSync from "prompt-sync"
let prompt = promptSync()

let salario;
export function exercicio2_if(salario) {
    salario = parseFloat(prompt("Informe o sálario: R$"))

    if (salario < 500) {
        let salarioacrescido = salario + (salario * (1 / 30))
        console.log("Você tem direito ao acrescimo de 30% em seu salário, o valor atualizado de seus rendimentos é de: R$" + salarioacrescido.toFixed(2))
    } else {
        console.log("Você não tem direito ao 30% de acrescimo em seu salário, pois o valor de seus rendimentos é maior que R$500,00")
    }
}