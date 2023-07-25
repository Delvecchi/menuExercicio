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
import { exercicio4_for } from "./moduloExercicio4_for.js";
import { exercicio5_for } from "./moduloExercicio5_for.js";
import { exercicio1_while } from "./moduloExercicio1_while.js";
import { exercicio2_while } from "./moduloExercicio2_while.js";
import { exercicio3_while } from "./moduloExercicio3_while.js";
import { exercicio4_while } from "./moduloExercicio4_while.js";
import { exercicio5_while } from "./moduloexercicio5_while.js";

let prompt = promptSync()
let resposta;

do {
    console.log("Para ver os exercicios JavaScript referente a estrutura condicional if digitar JS-if")
    console.log("Para ver os exercicios JavaScript referente a estrutura de decisão digitar JS-ed")
    console.log("Para ver os exercicios JavaScript referente a estrutura de decisão digitar JS-for")
    console.log("Para ver os exercicios JavaScript referente a estrutura condicional if digitar JS-while"+"\n")
    resposta = prompt("Informe o o tipo de exercicio que quer ver, ou digite sair para finalizar: "+"\n")
    switch (resposta) {
        case "JS-if":
            resposta = prompt("Informe o número de 1 à 6, para selecionar um exercicio, ou digite sair para finalizar: "+"\n")
            switch (resposta) {
                case "1":
                    console.log("1. Faça um programa que receba o nome, cargo e salário de um funcionário.") 
                    console.log("Se o funcionário ganhar abaixo de 1000 reais, calcule o salário acrescido de 10%.") 
                    console.log("Ao final exiba o nome, o cargo e o salário desse funcionário.")
                    exercicio1_if()
                    break;
                case "2":
                    console.log("2. Uma empresa decide dar aumento de 30% aos funcionários cujo salário é inferior a 500 reais.") 
                    console.log("Escreva um programa que receba o salário de um funcionário e imprima o valor do salário reajustado")
                    console.log("ou uma mensagem caso o funcionário não tenha direito a aumento.")
                    exercicio2_if()
                    break;
                case "3":
                    console.log("3. Faça um programa que receba um número inteiro do usuário e informe se este número é positivo ou negativo.")
                    exercicio3_if()
                    break;
                case "4":
                    console.log("4. Faça um programa que receba um número do usuário e informe se este número é par ou ímpar.")
                    exercicio4_if()
                    break;
                case "5":
                    console.log("5. Faça um programa receba dois valores e imprima qual é o maior número digitado.")
                    exercicio5_if()
                    break;
                case "6":
                    console.log("Faça um programa que receba 4 notas de um aluno,") 
                    console.log("calcule e imprima a média aritmética das notas e a mensagem de APROVADO para média superior ou igual a 7,0") 
                    console.log("RECUPERAÇÃO para notas entre 5.0 e 7,0") 
                    console.log("ou a mensagem de REPROVADO para média inferior a 5,0.")
                    exercicio6_if()
                    break;

                default:
                    break;
            }

        case "JS-ed":
            resposta = prompt("Informe o número de 1 à 6, para selecionar um exercicio, ou digite sair para finalizar: ")
            switch (resposta) {
                case "1":
                    console.log("Exercício 1: Verificação de login")
                    console.log("Escreva um programa que solicita ao usuário um nome de usuário e uma senha.") 
                    console.log("Verifique se o nome de usuário é 'admin' e a senha é 'senha123'.") 
                    console.log("Exiba uma mensagem indicando se o login foi bem-sucedido ou não.")
                    exercicio1_ed()
                    break;
                case "2":
                    console.log("Exercício 2: Verificação de dia da semana")
                    console.log("Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana e exibe o nome correspondente a esse dia.") 
                    console.log("Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.")
                    exercicio2_ed()
                    break;

                case "3":
                    console.log("Exercício 3: Verificação de números em ordem crescente")
                    console.log("Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem crescente.") 
                    console.log("Exibindo uma mensagem indicando se os números estão em ordem crescente ou não.")
                    exercicio3_ed()
                    break;

                case "4":
                    console.log("Exercício 4: Verificação de idade")
                    console.log("Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior de 18 anos.") 
                    console.log("Exiba uma mensagem indicando se a pessoa é maior de idade ou não.")
                    exercicio4_ed()
                    break;

                case "5":
                    console.log("Exercício 5: Cálculo de desconto progressivo")
                    console.log("Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele pague.") 
                    console.log("Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,")
                    console.log("aplique um desconto de acordo com o valor total da compra. Siga a tabela:")
                    console.log("Valor total da compra até R$ 100,00: sem desconto.")
                    console.log("Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.")
                    console.log("Valor total da compra acima de R$ 200,00: desconto de 20%.")
                    console.log("Exiba o valor final da compra com o desconto aplicado.")
                    exercicio5_ed()
                    break;

                case "6":
                    console.log("Exercício 6: Cálculo de IMC")
                    console.log("Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.")
                    console.log("Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura).") 
                    console.log("Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o usuário se encontra, de acordo com a tabela a seguir:")
                    console.log("IMC menor que 18.5: Abaixo do peso")
                    console.log("IMC de 18.5 a 24.9: Peso normal")
                    console.log("IMC de 25.0 a 29.9: Sobrepeso")
                    console.log("IMC de 30.0 a 34.9: Obesidade grau 1")
                    console.log("IMC de 35.0 a 39.9: Obesidade grau 2")
                    console.log("IMC maior ou igual a 40.0: Obesidade grau 3")
                    exercicio6_ed()
                    break;


                default:
                    break;
            }
        case "JS-for":
            resposta = prompt("Informe o número de 1 à 5, para selecionar um exercicio, ou digite sair para finalizar: ")
            switch (resposta) {
                case "1":
                    console.log("1. Imprimir números de 1 a 10 utilizando o loop for")
                    exercicio1_for()
                    break;
                case "2":
                    console.log("2. Imprimir números pares de 1 a 10.")
                    exercicio2_for()
                    break;

                case "3":
                    console.log("3. Faça um programa que imprima os números ímpares de 0 a 50;")
                    exercicio3_for()
                    break;

                case "4":
                    console.log("4. Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.")
                    exercicio4_for()
                    break;

                case "5":
                    console.log("5. Imprimir os primeiros 10 números da sequência de Fibonacci.")
                    exercicio5_for()
                    break;

                default:
                    break;
            }
        case "JS-while":
            resposta = prompt("Informe o número de 1 à 5, para selecionar um exercicio, ou digite sair para finalizar: ")
            switch (resposta) {
                case "1":
                    console.log("1. Imprimir números pares de 0 a 20 utilizando o loop while")
                    exercicio1_while()
                    break;
                case "2":
                    console.log("2. Calcular a soma dos números de 1 a 100 utilizando a estrutura while.")
                    exercicio2_while()
                    break;

                case "3":
                    console.log("3. Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos")
                    console.log("continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.")
                    exercicio3_while()
                    break;

                case "4":
                    console.log("4. Faça um programa que receba um número do usuário e mostre no console a contagem regressiva até 0.")
                    exercicio4_while()
                    break;

                case "5":
                    console.log("5. Faça um programa que receba um número do usuário e continue a pedir o número se o numero for diferente de 0.")
                    exercicio5_while()
                    break;

                default:
                    break;
            }


        default:
            console.log("Essa opção é inválida")
            break;
    }

} while (resposta != "sair");