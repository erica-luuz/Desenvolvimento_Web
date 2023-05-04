function informacoesPessoais(pessoa) {
    console.log(`Bem vindo(a)! ${pessoa.nome} ${pessoa.sobrenome} você tem ${pessoa.idade} anos, 
   suas informações de contato são ${pessoa.telefone()} , endereço cadastrado ${pessoa.endereço()}`)

}

let pessoa1 = {
    nome: "Erica",
    sobrenome: "Luz",
    idade: 38,
    endereco: [
        "Rua Capela do alto ", "Rua Cardoso"
    ],
    telefone: [ 
        119123456, 11987654
    ]
}

informacoesPessoais(pessoa1)

