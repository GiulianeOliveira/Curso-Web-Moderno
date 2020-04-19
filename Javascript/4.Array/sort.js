let dados = [1,2,4,'b',3,5, 'c', 'd', 'a']
console.log(dados.sort()) //Sort organiza em ordem alfabética/numérica o vetor 

// Também organiza conforme as regras passadas para ele, sort((indiceAtual, indiceProximo) => {ifs/elses/return true/false})
/*E.11 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id.*/

var vetorObjetos = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]
    vetorObjetos.sort((atual, proximo) => {
        if(atual.idade > proximo.idade){
            return false
        }
        if(atual.idade < proximo.idade){
            return true
        }
        if(atual.idade == proximo.idade){
            if(atual.id > proximo.id){
                return true
            }
            if(atual.id < proximo.id){
                return false
            }
        }

    })
    console.log(vetorObjetos)