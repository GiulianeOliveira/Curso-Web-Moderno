//Classe:
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa('Giuliane')
pessoa1.falar()

//Factory:
const criarPessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const pessoa2 = criarPessoa('Giu')
pessoa2.falar()

//Função construtora:
function novaPessoa(nome){
    let nomePessoa = nome   //privado
    this.getNome = function(){  //público
        return nomePessoa
    }
}
const pessoa3 = new novaPessoa('Giiiiiu')
console.log(pessoa3.getNome())

/*
//Função construtora:
function Pessoa(){
    let nome = 'Giu'
    this.getNome = () => nome
    
}
const pessoa1 = new Pessoa
console.log(pessoa1.getNome())

//Objeto literal:
const objPessoa = {
    nome: 'Giu'
}
console.log(objPessoa.nome)

//Função factory:
function criarPessoa(){
    return{
        nome: 'Giu'
    }
}
const pessoa2 = criarPessoa()
console.log(pessoa2.nome)*/