/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. 
Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos 
dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus
lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).*/

const comprimento = (ladoA=0, ladoB=0, ladoC=0) => {
    if(ladoA == ladoB && ladoB == ladoC){
        console.log('Equilátero')
    }
    else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        console.log('Isósceles')
    }
    if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
        console.log('Escaleno')
    }
}

comprimento(1,1,1)
comprimento(1,2,2)
comprimento(1,2,3)