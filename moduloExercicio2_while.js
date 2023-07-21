// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.
// console.log("Exercicio 7")

let contador = 0;
let soma = 0;
export function exercicio2_while() {
while (contador <= 100) {
    
    soma = soma + contador
    contador ++
}

console.log(soma)
}