/*Função assing permite concatenar objetos, o primeiro parametro é o objeto de destino
da concatenação.*/
const destino = {frase1: 'Oi'}
const obj1 = {frase2: 'meu nome'}
const obj2 = {frase3: 'é'}
const obj3 = {frase4: 'Giuliane,', frase5: 'prazer!'}
Object.assign(destino, obj1, obj2, obj3)
console.log(destino)

Object.freeze(destino) //"Congela" o objeto e seus valores, o mesmo não poderá mais ser modificado.
destino.frase4 = 'Paulo'
console.log(destino)