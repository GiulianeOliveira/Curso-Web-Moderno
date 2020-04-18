const pessoa = {
    nome: 'Giuliane',
    idade: 20,
    peso: 60
}

console.log(Object.keys(pessoa)) //Retorna todas as chaves de um objeto
console.log(Object.values(pessoa)) //Retorna todos os valores dos atributos
console.log(Object.entries(pessoa)) //Retorna arrays contendo pares [chave, valores dos atributos]

Object.entries(pessoa).forEach(element => { //Para cada índice do vetor essa função será invocada
    console.log(`${element[0]}: ${element[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => { //Posso mudar o nome dos parâmetros que cada índice representará
    console.log(`${chave}: ${valor}`)
})
