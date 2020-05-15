/*
let tem escopo de bloco
var nao tem escopo de bloco, é global
template string: `${variavel}`
*/

/*Destructuring: 
Forma de tirar de dentro de uma estrutura algo, objeto, array, string, etc*/
const [x,y] = [1,2,3]
console.log(x,y)

const a = {nome, idade} = {nome: 'Giu', cidade: 'RG', idade: 20}
console.log(nome, idade)