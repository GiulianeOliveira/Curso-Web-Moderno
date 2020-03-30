/*const [a] = [10]
console.log(a)
const [n1, ,n3, n5, n6=100] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9,6,8]]
console.log(nota)*/

//SEM DESTRUCTURING: (gerar numero aleatório)
const teste = { min: 0, max: 1000}

function valor(min, max){
    return Math.floor(Math.random() * (max-min) - min)
}
console.log(valor(teste.min, teste.max))

//COM DESTRUCTURING:
const outroTeste = { minimo: 0, maximo: 1000}

function rand({minimo, maximo}){ //Aqui tu coloca os atributos do objeto que quer usar 
    return Math.floor(Math.random() * (maximo-minimo) - minimo)
}
console.log(rand(outroTeste)) //Dessa forma, só precisa passar como parâmetro o objeto
