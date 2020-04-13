//É passar uma função para outra e quando determinado evento acontecer, essa função será devolvida.

//1. Gerar um novo array com todas as notas < 7: 
const notas = [7.7, 6.5, 5.2, 8.9, 4.6, 7.1, 9.0]
// 1. SEM callback:
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// 1. COM callback:
let notasBaixas2 = notas.filter(notas => notas < 7) //"Filtra" a partir da função arrow as notas menores que 7 
console.log(notasBaixas2)