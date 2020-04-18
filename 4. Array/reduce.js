/*Transforma um array conforme os critérios definidos na sua chamada:
    reduce(funcao(acumulador, valorAtual){}, valor inicial do acumulador)
O resultado de uma função reduce é sempre passado para a próxima iteração através do acumulador, 
também possui o elemento atual que é o elemento do array acessado naquela iteração e possui o valor inicial,
valor no qual o acumulador inicia.*/
const alunos = [
    {nome: 'Joana', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Joao', nota: 9.8, bolsista: false},
    {nome: 'Pedro', nota: 8.7, bolsista: true} 
]

//let resultado = alunos.map(elemento=>elemento.nota) //Array de notas 

const notas = elemento => elemento.nota
const somar = (acumulador, valorAtual) => acumulador+valorAtual
const resultado = alunos.map(notas).reduce(somar,10) // Primeiro está transformando com o map em um array de notas e depois utilizando reduce para somá-las
console.log(resultado)