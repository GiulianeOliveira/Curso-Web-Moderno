const sequencia = {
    _id: 1,
    get id(){
        return this._id++
    }
}

const produtos = {} // chave id do produoto, valor objeto com infos do produto. Temos: produtos = {1: {nome: blabla, preco: 123, id:1}, 2: ...}

function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequencia.id // Setou um id para esse produto
    }
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){ // Encontrar produto por id
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos) // Lista todos os produtos
}

function excluirProduto(id){
    delete produtos[id]
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto} // funções visíveis pra fora do arquivo