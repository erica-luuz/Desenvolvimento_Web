// Criar 3 objetos que represente 3 empresas, o objeto deve ter:
// Nome da empresa, CNPJ - use informações ficticias,
// Tipo de empresa - banco, farmácia, mercado, Quantidade de funcionários
// Adicione esses objetos em uma lista. imprima os objetos no console

var banco = {
    nomeDaEmpresa: "Cofre Econômico",
    cnpj: "000.111.000\\000-1",
    tipo: "banco",
    quantidadeDeFuncionarios: 30,
}

var farmacia = {
    nomeDaEmpresa: "Drogaria Saúde",
    cnpj: "000.222.000\\000-1",
    tipo: "farmácia",
    quantidadeDeFuncionarios: 15,
}

var mercado = {
    nomeDaEmpresa: "Compre Mais",
    cnpj: "000.333.000\\000-1",
    tipo: "mercado",
    quantidadeDeFuncionarios: 5,
}

var empresas = []

empresas.push(banco, farmacia, mercado)

console.log(empresas)