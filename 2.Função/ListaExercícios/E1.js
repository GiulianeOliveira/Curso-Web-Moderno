/*Crie uma função que dado dois valores (passados como parâmetros)
mostre no console a soma, subtração,multiplicação e divisão desses valores.*/

const calcular = (valor1 = 0, valor2 = 0) =>{
    console.log(`Soma: ${valor1+valor2} Subtração: ${valor1-valor2} Divisão: ${valor1/valor2} Multiplicação: ${valor1*valor2}`)
}
calcular(10,2)