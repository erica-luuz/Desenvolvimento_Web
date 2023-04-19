var sistema = {
    nomeUsuario: prompt("Digite seu nome de usuário: "),
    senha: prompt("Digite sua senha: ")
}
if (sistema.nomeUsuario == "admin" && sistema.senha == "123"){
    document.writeln("Seja Bem Vindo! " + sistema.nomeUsuario)
}else{
    document.writeln("Algo deu errado, tente novamente!!!")
}