// 2. Imprimir números pares de 1 a 10.
let sobra;
export function exercicio2_for() {
    for (let indice = 0; indice <= 10; indice++) {
        sobra = indice % 2
        if (sobra == 0) {
            console.log(indice)

        }
    }
}