//De forma literal: É MAIS FLEXÍVEL!!
const pessoa = {
    nome: ' ', 
    notas: [],
    Media: function(){
        let media = 0 
        for(let i=0; i<this.notas.length; i++){
            media += this.notas[i]/this.notas.length
        }
        console.log(media)
    }
}
pessoa.nome = 'Giuliane'
pessoa.notas = [1,2,3,6]
pessoa.Media()
console.log(pessoa)
console.log('\n')

//Object create: MAIS CONTROLE NAS MODIFICAÇÕES DE CADA ATRIBUTO/MÉTODO
const mae = {nome: 'Julia', corDosOlhos: 'Azul'}
const filha = Object.create(mae,{
    nome: {value: 'Juliana', writable: false, enumerable: true},
    Herdou: {value: ()=> {console.log(filha.corDosOlhos)}, writable: false, enumerable: false}
})
filha.Herdou()
console.log(filha)
console.log('\n')

//Object.preventExtensions: NÃO DEIXA ADICIONAR MAIS ATRIBUTOS, APENAS MODIFICAR E DELETAR OS EXISTENTES
const pessoa1 = Object.preventExtensions({
    nome: 'Giuliane', idade: 20
})
pessoa1.sobrenome = 'Oliveira'
delete(pessoa1.idade)
pessoa1.nome = 'Giu'
console.log(pessoa1)
console.log('\n')
/*O Object.seal é a mesma coisa que o prevent, a diferença é que ele não deixa deletar ou adicionar atributos,
apenas pode modificar os existentes!!*/

//Classe: FORMA ADICIONADA NO ECMASCRIPT 2015.. 
class Notas{
    constructor(nome, notas){
        this.nome = nome
        this.notas = notas
    }
    Media(){
        let media=0
        this.notas.forEach(valor => {
            media += valor
        });
        console.log(media/this.notas.length)
    }
}
const Joao = new Notas('Paulo', [1,2,3,6])
Joao.Media()
console.log('\n')

//Função factory: QUANDO CHAMA A FUNÇÃO, RETORNA UM OBJETO
const criaPessoa = (nome='Vazio', notas=0) => {
    return{
        nome: nome,
        notas: notas,
        Media: function(){
            let media=0
            this.notas.forEach(valor => {
            media += valor
            });
        console.log(media/this.notas.length)
        }
    }
}
const Giuliane = criaPessoa('Giuliane', [1,2,3,6])
Giuliane.Media()
console.log('\n')

//Função construtora: Acho mais fácil de "controlar" os atributos públicos e privados...
function criaPessoa2(n='Vazio', i=0, not=0){
    //Atributos privados:
    nome = n
    idade = i
    notas = not
    //Atributos públicos:
    this.imprime = ()=>{console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos.`)}
    this.media = ()=>{
        let media=0
        notas.forEach(element => {
            media += element
        });
        console.log(`A media das notas é: ${media/notas.length}`)}
}
const Giu = new criaPessoa2('Giuliane', 20, [1,2,3,6])
Giu.imprime()
Giu.media()