const array = [10, undefined, 30, 40, 50]

for(let indice in array){
    
    //console.log(array[indice])
}

const pessoa = {
    nome: 'Giuliane',
    sobrenome: 'Oliveira',
    idade: 20,
    peso: 60
}
//Percorrendo os atributos de um objeto:
for(let atrib in pessoa){
    console.log(`${atrib} = ${pessoa[atrib]}`)
}
