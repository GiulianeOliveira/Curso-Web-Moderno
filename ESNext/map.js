// Map é um objeto e não deve ser confundido com array.map!!!
const tecnologia = new Map() // instanciando Map
tecnologia.set('react', {framework: false}) // instancia uma estrutura chave/valor
tecnologia.set('angular', {framework: true})
console.log(tecnologia.get('react').framework) // Encontrando o valor

// Outra forma de fazer:
const chavesVariadas = new Map([ //chave/valor
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])
chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})
console.log(chavesVariadas.has(123)) // has é para ver se possui uma chave com o valor passado como parâmetro
console.log(chavesVariadas.size)