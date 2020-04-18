/*Serve para transformar (mapear) um array em outro, de mesmo tamanho que o array original,
mas com os dados modificados de determinada forma.*/
const numeros = [1,2,3,4,5]
let resultado = numeros.map(elemento => { // resultado é o vetor mapeado, o parâmetro de map é uma callback que pode ter 3 parametros
    return elemento * 2
})
console.log(resultado)

/*Pode invocar funções já definidas: */
const soma10 = valor => valor + 10
const triplo = valor => valor * 3
const dinheiro = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`

/*Pode utilizar múltiplos maps, serão feitos da esquerda para a direita: */
resultado = numeros.map(soma10).map(triplo).map(dinheiro)
console.log(resultado)