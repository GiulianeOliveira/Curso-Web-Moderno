/*Importando arquivos de outros módulos através do require: */

const moduloA = require('./moduloA') // require precisa do caminho até o arquivo que deseja importar
const moduloB = require('./moduloB') 

console.log(moduloA.bemVindo)
console.log(moduloA.tchau)
console.log(moduloA.ola)
console.log(moduloB.aguarde)
console.log(moduloB.falar())

console.log(moduloB, moduloA)
