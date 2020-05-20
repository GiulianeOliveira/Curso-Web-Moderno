// set não aceita repetição e não é indexado
const paises = new Set()
paises.add('BRA').add('EUA')
paises.add('CHI')
paises.add('EUA') // Vai ser ignorado, pois nao permite repetição
console.log(paises)
console.log(paises.size)
console.log(paises.has('BRA'))
paises.delete('EUA')
console.log(paises.has('EUA'))

const nomes = ['EUA', 'BRA', 'FRA', 'ALE', 'BRA']
const paisess = new Set(nomes)
console.log(paisess) // Observe que ele nao permite os valores repetidos, colocando-os apenas uma vez
