let dados = [10,20,30,40,50,60,70,80]

//dados.splice(3,1)   //splice(indiceInicial, quantidadeElementosExcluirAPartirDoIndice, AdicionarElementosAqui)
console.log(dados)
dados.splice(3,0,'AdicioneiO3Elemento', 'AdicioneiO4Elemento') //Elementos adicionados entre o índice 2 e 3 (no meio)
console.log(dados)
