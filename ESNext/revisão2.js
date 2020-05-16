/*Função arrow: 
sintáxe mais flexível e reduzida, sempre é uma função anônima!*/
const soma = (a,b) => a+b
console.log(soma(2,4))

// this fica associado ao local que a função foi definida:
const lexico1 = () => console.log(this === module.exports)
const lexico2 = () => lexico1.bind({}) // força a apontar para um objeto
lexico1()
lexico2()

// Parâmetro default:
function teste(texto = "Valor padrão"){
    console.log(texto)
}
teste() // Assume valor padrão
teste('Olá!')
teste(null) // Assume valor nulo

// Operador rest: (spread)
function variosParametros(...numeros){ 
    let total = 0
    numeros.forEach(e => total += e) // Vetor com os parâmetros recebidos na função
    return total
}
console.log(variosParametros(3, 7, 10, 5))
