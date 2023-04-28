let pessoas = [
    {
        nome: "João",
        idade: 40,
        ehAdmin: true,
        email: "joão@email.com"
    },
    {
        nome: "Maria",
        idade: 35,
        ehAdmin: false,
        email: "maria@email.com"
    },
    {
        nome: "José",
        idade: 30,
        ehAdmin: false,
        email: "jose@email.com"
    },
    {
        nome: "Ester",
        idade: 25,
        ehAdmin: false,
        email: "ester@email.com"
    },
    {
        nome: "Dabio",
        idade: 20,
        ehAdmin: false,
        email: "dabio@email.com"
    }
]
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].ehAdmin == true) {
        console.log("Olá " + pessoas[i].nome + "! Bem vindo(a) você é admin do sistema,enviamos um email para" + pessoas[i].email + " para você criar uma senha")
    } else {
        console.log("Olá " + pessoas[i].nome + "! Bem vindo(a) você não é admin do sistema,enviamos um email para" + pessoas[i].email + " para você criar uma senha")
    }
}


