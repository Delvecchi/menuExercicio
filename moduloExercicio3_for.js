let sobra;
export function exercicio3_for() {
    for (let indice = 1; indice <= 50; indice++) {
        sobra = indice % 2
        if (sobra != 0) {
            console.log(indice)

        }
    }
}