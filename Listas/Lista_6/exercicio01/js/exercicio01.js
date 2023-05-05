function maiorIdade(listaPessoas) {
    for (let i = 0; i < listaPessoas.length; i++) {
        if (listaPessoas[i].idade >= 18) {
            console.log(`Seja bem vindo(a)! Você se chama ${listaPessoas[i].nome} ${listaPessoas[i].sobrenome} e tem ${listaPessoas[i].idade} anos e é maior de idade.`)
        } else {
            console.log(`Seja bem vindo(a)! Você se chama ${listaPessoas[i].nome} ${listaPessoas[i].sobrenome} e tem ${listaPessoas[i].idade} anos e não é maior de idade.`)
        }

    }
}

function verficarNome(listaPessoas) {
    for (let i = 0; i < listaPessoas.length; i++) {
        let nomeCompleto = listaPessoas[i].nome + " " + listaPessoas[i].sobrenome
        let quantidade = nomeCompleto.length
        if (quantidade < 3) {
            console.log("Erro! Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres." + nomeCompleto)
        }
        if (quantidade > 50) {
            console.log("Erro! Nome invalido, nome e sobrenome devem ser menores que 50 caracteres." + nomeCompleto)
        }
    }
}

function quantidadeDePessoas(listaPessoas) {
    console.log(`Existe ${listaPessoas.length} pessoas nesta lista`)
}


let listaPessoas = [
    {
        nome: "Fulano",
        sobrenome: "Santos",
        idade: 18
    },
    {
        nome: "Ciclano",
        sobrenome: "Ribeiro",
        idade: 17

    },
    {
        nome: "Beltrano",
        sobrenome: "Silva",
        idade: 16
    },
    {
        nome: "Herculano",
        sobrenome: "Menezes",
        idade: 20
    },
    {
        nome: "Minuano",
        sobrenome: "Souza",
        idade: 13
    }
]
maiorIdade(listaPessoas)
quantidadeDePessoas(listaPessoas)
verficarNome(listaPessoas)

