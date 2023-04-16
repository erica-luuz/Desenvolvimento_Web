/* Criar 3 objetos com informações de pessoas contendo as seguintes infomações:
- nome
- altura
Em seguida imprima na tela quem é omais alto e quem é o mais baixo
Exemplo de Saída;
-fulano é mais alto e ciclano é o mais baixo */

var pessoa1 = {
    nome: "Nicollas",
    altura: 1.45
}

var pessoa2 = {
    nome: "Luccas",
    altura: 1.24
}

var pessoa3 = {
    nome: "Benjamim",
    altura: 1.35
}

if (pessoa1.altura > pessoa2.altura && pessoa1.altura > pessoa3.altura){
    if( pessoa2.altura > pessoa3.altura){
        console.log(pessoa1.nome + " é o mais alto e " + pessoa3.nome + " é mais baixo.")
    }else{
        console.log(pessoa1.nome + " é o mais alto e " + pessoa2.nome + " é mais baixo.")
    }
}else if(pessoa2.altura > pessoa1.altura && pessoa2.altura > pessoa3.altura){
    if( pessoa1.altura > pessoa3.altura){
        console.log(pessoa2.nome + " é o mais alto e " + pessoa3.nome + " é mais baixo.")
    }else{
        console.log(pessoa1.nome + " é o mais alto e " + pessoa1.nome + " é mais baixo.")
    }
}else if(pessoa3.altura > pessoa1.altura && pessoa3.altura > pessoa2.altura){
    if( pessoa1.altura > pessoa2.altura){
        console.log(pessoa3.nome + " é o mais alto e " + pessoa2.nome + " é mais baixo.")
    }else{
        console.log(pessoa3.nome + " é o mais alto e " + pessoa1.nome + " é mais baixo.")
    }
}