import promptSync from "prompt-sync"
let prompt = promptSync()

let nome_do_usuario;
let senha;

export function exercicio1_ed(nome_do_usuario,senha) {
nome_do_usuario = prompt("Informe o nome d usuário: ")
senha = prompt("Informe a senha: ")

if(nome_do_usuario == "admin" && senha == "senha123") {
    console.log("Login bem-sucedido!")
} else {
    console.log("Login mal-sucedido")
}
}
