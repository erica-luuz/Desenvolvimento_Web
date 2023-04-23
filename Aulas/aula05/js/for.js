let tarefas = [
    "lavar louça",
    "lavar roupa",
    "fazer comida",
    "lavar banheiro"
]
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < tarefas.length; i++){
    if (tarefas[i] == "lavar banheiro"){
        break
    }
    console.log(tarefas[i])
}

for (let x = 0; x < numeros.length; x++){
    if (numeros[x] % 2 == 0){
        console.log($(numero[x]) ,'é par')
    } else {
        console.log($(numero[x]) ,'é impar')
    }
}

for (let tarefa of tarefas) {
    console.log(tarefa)
}