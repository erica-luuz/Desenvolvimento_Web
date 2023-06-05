class Pessoa {
    public _nome: string;
    public _idade: number;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }
}

let p1 = new Pessoa("Fulano", 10)
console.log(`${p1._nome} tem ${p1._idade} anos`)

