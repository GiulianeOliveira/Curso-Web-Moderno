/*Retornar uma array apenas com os preços */
const carrinho = [ //vetor de json
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 18.98}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
const converte = elemento => JSON.parse(elemento) //Transforma json em objeto
const apenasPreco = objeto => objeto.preco 

let resultado = carrinho.map(converte).map(apenasPreco) // Converti o json para objeto e acessei o atributo preço!
console.log(resultado)

/* Uma forma um pouco mais complicada:
    let resultado = carrinho.map(elemento => {
    return JSON.parse(elemento) // Transforma o json em objeto
})
    let resultado = carrinho.map(converte)
    resultado = resultado.map(elemento =>{
    return Object.values(elemento).pop() // Pega um array com os valores do objeto e .pop tira o último valor
})
*/
