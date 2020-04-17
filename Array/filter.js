/*Cria novo array com base no array original que terá sido "filtrado" conforme as condições determinadas.*/
const produtos = [
    {nome: 'Notebook', preco: 3500, fragil: true},
    {nome: 'Iphone', preco: 4700, fragil: true},
    {nome: 'Caneca', preco: 12.30, fragil: true},
    {nome: 'Caneca de plástico', preco: 8.90, fragil: false}
]
//Array apenas com produtos caros e frágeis:
let produtosFiltrados = produtos.filter(elemento => {
    return elemento.fragil == true && elemento.preco > 3000
})
console.log(produtosFiltrados)

//Outra forma de fazer:
const produtoCaro = prod => prod.preco > 3000
const produtoFragil = prod => prod.fragil
produtosFiltrados = produtos.filter(produtoCaro).filter(produtoFragil)

console.log(produtosFiltrados)
