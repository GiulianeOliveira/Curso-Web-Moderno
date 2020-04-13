/*Crie uma função que irá receber dois valores, o dividendo e o divisor.
A função deverá imprimir o resultado e o resto da divisão destes dois valores.*/

const divisao = (dividendo=0, divisor=0) => {
    console.log(`Resultado: ${(dividendo/divisor).toFixed(2)} Resto: ${dividendo%divisor}`)
}
divisao(10,2)
divisao(10,3)