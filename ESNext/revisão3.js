// ES8: Object.values -> Cria um array com todos os valores dos elementos do objeto 
// Object.entries -> Cria uma matriz com todos as keys e valores dos elementos do objeto
const pessoa = {
    nome: 'Giu', idade: 20
}
console.log(Object.values(pessoa), Object.keys(pessoa), Object.entries(pessoa))

// Melhorias na notação literal de objetos:
const nome = 'Carta'
const p = {
    nome, 
    Ola(){
        return 'Olá'
    }
}
console.log(p.nome, p.Ola())

// Class:
class Animal {
    nome = 'Mamífero'
}
class Cachorro extends Animal{
    falar(){
        return 'Au Au!'
    }
}
console.log(new Cachorro().nome)