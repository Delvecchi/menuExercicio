import promptSync from "prompt-sync"
import { exercicio1_if } from "./moduloExercicio1_if.js";
import { exercicio2_if } from "./moduloExercicio2_if.js";
import { exercicio3_if } from "./moduloExercicio3_if.js";
import { exercicio4_if } from "./moduloExercicio4_if.js";
import { exercicio5_if } from "./moduloExercicio5_if.js";
import { exercicio6_if } from "./moduloExercicio6_if.js";
import { exercicio1_ed } from "./moduloExercicio1_ed.js";
import { exercicio2_ed } from "./moduloExercicio2_ed.js";
import { exercicio3_ed } from "./moduloExercicio3_ed.js";
import { exercicio4_ed } from "./moduloExercicio4_ed.js";
import { exercicio5_ed } from "./moduloExercicio5_ed.js";
import { exercicio6_ed } from "./moduloExercicio6_ed.js";
import { exercicio1_for } from "./moduloExercicio1_for.js";
import { exercicio2_for } from "./moduloExercicio2_for.js";
import { exercicio3_for } from "./moduloExercicio3_for.js";
import { exercicio3_for } from "./moduloExercicio3_for.js";
import { exercicio4_for } from "./moduloExercicio4_for.js";
import { exercicio5_for } from "./moduloexercicio5_while.js";
import { exercicio1_while } from "./moduloExercicio1_while.js";
import { exercicio2_while } from "./moduloExercicio2_while.js";
import { exercicio3_while } from "./moduloExercicio3_while.js";
import { exercicio4_while } from "./moduloExercicio4_while.js";
import { exercicio5_while } from "./moduloexercicio5_while.js";


let prompt = promptSync()
let resposta;


do {
    resposta = prompt("Informe o número de 1 à 6, para selecionar um exercicio, ou digite sair para finalizar: ")
    switch (resposta) {
        case "1":
            resposta = prompt("Informe o número de 1 à 6, para selecionar um exercicio, ou digite sair para finalizar: ")
            switch (resposta) {
                case "1":
                    console.log("Deu certo")
                    exercicio1_if()
                    break;
                case "2":
                    console.log("Deu certo")
                    exercicio2_if()
                    break;
                case "3":
                    console.log("Deu certo")
                    exercicio3_if()
                    break;
                case "4":
                    console.log("Deu certo")
                    exercicio4_if()
                    break;
                case "5":
                    console.log("Deu certo")
                    exercicio5_if()
                    break;
                case "6":
                    console.log("Deu certo")
                    exercicio6_if()
                    break;

                default:
                    break;
            }

        case "2":
            resposta = prompt("Informe o número de 1 à 6, para selecionar um exercicio, ou digite sair para finalizar: ")
            switch (key) {
                case "1":
                    console.log("Deu certo")
                    exercicio1_ed()
                    break;
                case "2":
                    console.log("Deu certo")
                    exercicio2_ed()
                    break;

                case "3":
                    console.log("Deu certo")
                    exercicio3_ed()
                    break;

                case "4":
                    console.log("Deu certo")
                    exercicio4_ed()
                    break;

                case "5":
                    console.log("Deu certo")
                    exercicio5_ed()
                    break;

                case "6":
                    console.log("Deu certo")
                    exercicio6_ed()
                    break;


                default:
                    break;
            }
        case "3":
            resposta = prompt("Informe o número de 1 à 6, para selecionar um exercicio, ou digite sair para finalizar: ")
            switch (key) {
                case "1":
                    console.log("Deu certo")
                    exercicio1_ed()
                    break;
                case "2":
                    console.log("Deu certo")
                    exercicio2_ed()
                    break;

                case "3":
                    console.log("Deu certo")
                    exercicio3_ed()
                    break;

                case "4":
                    console.log("Deu certo")
                    exercicio4_ed()
                    break;

                case "5":
                    console.log("Deu certo")
                    exercicio5_ed()
                    break;

                case "6":
                    console.log("Deu certo")
                    exercicio6_ed()
                    break;


                default:
                    break;
            }
        case "4":
            console.log("Você escolheu o exercicio 4")
            exercicio4()
            break;
        case "5":
            console.log("Você escolheu o exercicio 5")
            exercicio5()
            break;
        case "6":
            console.log("Você escolheu o exercicio 6")
            exercicio6()
            break;
        case "7":
            console.log("Você escolheu o exercicio 7")
            exercicio7()
            break;
        case "8":
            console.log("Você escolheu o exercicio 8")
            exercicio8()
            break;
        case "9":
            console.log("Você escolheu o exercicio 9")
            exercicio9()
            break;
        case "10":
            console.log("Você escolheu o exercicio 10")
            exercicio10()
            break;

        default:
            console.log("Essa opção é inválida")
            break;
    }

} while (resposta != "sair");