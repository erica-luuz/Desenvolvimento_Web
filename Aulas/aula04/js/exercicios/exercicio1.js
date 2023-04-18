/* Criar 3 objetos com informações de pessoas contendo as seguintes informações:
- nome -idade
Em seguida imprima na tela quem é o mais velho. exemplo de saida:
- Funlano é o mais velho */

var pessoa1 = {
    nome: "Nicollas",
    idade: 14
}

var pessoa2 = {
    nome: "Luccas",
    idade: 10
}

var pessoa3 = {
    nome: "Benjamim",
    idade: 17
}

if (pessoa1.idade > pessoa2.idade && pessoa1.idade > pessoa3.idade){
    console.log(pessoa1.nome + " é o mais velho")
}else if (pessoa2.idade > pessoa1.idade && pessoa2.idade > pessoa3.idade){
    console.log(pessoa2.nome + " é o mais velho")
}else if (pessoa3.idade > pessoa1.idade && pessoa3.idade > pessoa2.idade){
    console.log(pessoa3.nome + " é o mais velho")
}
