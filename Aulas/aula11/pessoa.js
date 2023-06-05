"use strict";
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
}
let p1 = new Pessoa("Fulano", 10);
console.log(`${p1._nome} tem ${p1._idade} anos`);
