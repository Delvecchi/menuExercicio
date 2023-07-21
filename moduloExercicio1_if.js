import promptSync from "prompt-sync"
let prompt = promptSync()

let nome;
let cargo;
let salario;

export function exercicio1_if(nome, cargo, salario) {
    nome = prompt("Informe o nome do funcionário: ")
    cargo = prompt("Informe o cargo do funcionário: ")
    salario = parseFloat(prompt("Informe o salario do funcionário: R$"))

    if (salario < 1000) {
        let salarioacrescido = salario + (salario * (1 / 10))
        console.log("Nome do funcionário: " + nome)
        console.log("Cargo do funcionário: " + cargo)
        console.log("Salário do funcionário acrescido de 10%: R$" + salarioacrescido.toFixed(2))
    } else {
        console.log("Nome do funcionário: " + nome)
        console.log("Cargo do funcionário: " + cargo)
        console.log("Salário do funcionário: R$" + salario.toFixed(2))
    }
}
