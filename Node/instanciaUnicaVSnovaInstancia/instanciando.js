/*Ambos posssuem o mesmo valor, pois node faz cache dos módulos!
No caso abaixo, exportei um objeto e o node faz cache dele, se o objeto já estiver
sido criado, o node retorna a mesma instância dele, mantendo então seus valores anteriores.*/
const contador = require('./instanciaUnica')
contador.incrementa()
console.log(contador.valor)

const contador2 = require('./instanciaUnica')
console.log(contador2.valor)

/*Como resolver? Através de uma função factory! Assim você poderá ter novas instâncias.*/

const contador3 = require('./instanciaNova')() // O () serve para criar uma nova instância
contador3.incrementa()
console.log(contador3.valor)

const contador4 = require('./instanciaNova')()
console.log(contador4.valor)

// contador3 e contador4 possuem valores diferentes, pois são instâncias diferentes.