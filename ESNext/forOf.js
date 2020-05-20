// É um tipo de laço for, que intera em cima de valores
for(let letra of 'Giuliane'){
    console.log(letra) // pega o valor/elemento de cada indice
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){ // for in pega os indices
    console.log(i)
}

for(let i of assuntosEcma){ // for of pega os valores dos indices
    console.log(i)
}
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let a of assuntosMap){
    console.log(a)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

//Destructuring:
for(let [chave, valor] of assuntosMap.entries()){
    console.log(chave, valor)
}