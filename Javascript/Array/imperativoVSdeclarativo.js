const alunos = [
    {nome: 'José', nota: 8.6},
    {nome: 'Carla', nota: 10}
]

// Imperativo: controla todos os passos do código, deixando mais explícito o algoritmo
let total = 0
for(let i = 0; i< alunos.length; i++){
    total += alunos[i].nota
}
console.log(total/alunos.length)

// Declarativo: permite reuso dos códigos através de funções já declaradas e também, permite que a própria linguagem resolva através dos seus métodos
const getNota = elemento => elemento.nota
const soma = (resultado, valorAtual) => resultado + valorAtual

const resultado = alunos.map(getNota).reduce(soma)/alunos.length
console.log(resultado)