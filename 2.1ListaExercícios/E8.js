/*Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, 
ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota o
novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma 
lista string = “pontuação1 pontuação2pontuação3 etc..”, escreva uma função que ao recebê-la,
irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde 
de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor. 
Exemplo: String: “10 20 20 8 25 3 0 30 1” Retorno: [3, 7] (Significa que ele bateu três vezes seu
recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo.)*/

const analisa = pontuacao => {
    let pontos = pontuacao.split(", ") //separa em strings diferentes a cada ", " encontrado.
    for(let k in pontos){   //convertendo o vetor de string em um vetor de numbers
        pontos[k] = Number(pontos[k])    
    }
    //console.log(pontos)
    let recorde=0, piorJogo=0, maior=pontos[0], menor=pontos[0]
    for(let i=0; i<pontos.length; i++){
        if(pontos[i] > maior){
            maior = pontos[i]
            recorde++
        }
        else if(pontos[i] < menor){
            menor = pontos[i]
            piorJogo = i
        }
    }
    return [recorde, piorJogo]    
}

let string = '10, 20, 20, 8, 25, 3, 0, 30, 1'
console.log(analisa(string))
