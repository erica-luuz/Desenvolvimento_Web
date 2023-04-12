var artista1 = {
    nomeDoArtistaBanda: "Joziane",
    anoLancamentoPrimeiroCd: 2001,
    estiloDaBandaArtista: "Gospel",
    melhoresMusicas: [
        musica1 = "Abra os meus olhos",
        musica2 = "Herança",
        musica3 = "Santo",
        musica4 = "Meu milagre"
    ],

    informacoesIntegrantes: [
        {
            nomeCompleto: "Jozianne Lopes de Oliveira",
            paisDeOrigem: "Brasil",
            idade: 46
        }
    ]
}

var artista2 = {
    nomeDoArtistaBanda: "Aline Barros",
    anoLancamentoPrimeiroCd: 1995,
    estiloDaBandaArtista: "Gospel",
    melhoresMusicas: [
        musica1 = "Sonda-me, usa-me",
        musica2 = "Ressuscita-menubar",
        musica3 = "A festa vai começar",
        musica4 = "Imensurável"
    ],

    informacoesIntegrantes: [
        {
            nomeCompleto: "Aline Kinstenmacker Barros dos Santos",
            paisDeOrigem: "Brasil",
            idade: 45
        }
    ]
}
var artista3 = {
    nomeDoArtistaBanda: "Gabriela Rocha",
    anoLancamentoPrimeiroCd: 2012,
    estiloDaBandaArtista: "Gospel",
    melhoresMusicas: [
        musica1 = "Lugar Secreto",
        musica2 = "Eu navegarei",
        musica3 = "Atos 2",
        musica4 = "Diz"
    ],

    informacoesIntegrantes: [
        {
            nomeCompleto: "Gabriela Silva Rocha",
            paisDeOrigem: "Brasil",
            idade: 29
        }
    ]
}


var database = [];
database.push(artista1)
database.push(artista2)
database.push(artista3)
console.log(database)

database.sort()
console.log(database)

database.pop()
console.log(database)


