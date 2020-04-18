const alunos = [
    {nome: 'Joana', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Joao', nota: 9.8, bolsista: false},
    {nome: 'Pedro', nota: 8.7, bolsista: true} 
]
const apenasBolsista = elemento => elemento.bolsista
// Todos os alunos são bolsistas?
const todosBolsistas = (acumulador, valorAtual) => acumulador && valorAtual
let resultado = alunos.map(apenasBolsista).reduce(todosBolsistas, true)
console.log(resultado)

// Algum aluno é bolsista?
resultado = alunos.map(apenasBolsista).reduce((acumulador, valorAtual) => {
    return acumulador || valorAtual
}, false)
console.log(resultado)
