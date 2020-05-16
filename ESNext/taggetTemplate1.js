// Processa uma template string dentro de uma função
function tag(partes, ...valores){
    console.log(partes, valores)
    return 'Outra string'    
}
const aluno = 'Giu'
const situacao = 'Aprovada'
console.log(tag `${aluno} está ${situacao}.`)
