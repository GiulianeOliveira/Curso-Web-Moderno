const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./BancoDeDados')

app.use(bodyParser.urlencoded({ extended: true})) // Pra qualquer requisição que se faça no servidor, ele vai converter pra objeto se o formato de dsdos usado for enconded

app.get('/produtos', (requisicao, resposta, proximo) => {
    resposta.send(bancoDeDados.getProdutos()) //Ele converte para JSON o objeto e lista todos os produtos
})

app.get('/produtos/:id', (requisicao, resposta, proximo) => {
    resposta.send(bancoDeDados.getProduto(requisicao.params.id)) // Ele lista o produto pelo id informado
})

// Salvando um novo produto:
app.post('/produtos', (requisicao, resposta, proximo) => {
    const produto = bancoDeDados.salvarProduto({ // parametro({produto})
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })
    resposta.send(produto) // Retorna o produto como resposta
})

// Salvando um produto que já possui uma id:
app.put('/produtos/:id', (requisicao, resposta, proximo) => {
    const produto = bancoDeDados.salvarProduto({ // parametro({produto})
        id: requisicao.params.id, // vai substituir o produto caso já exista esse id
        nome: requisicao.body.nome,
        preco: requisicao.body.preco
    })
    resposta.send(produto) // Retorna o produto como resposta
})

// Excluindo produto:
app.delete('/produtos/:id', (requisicao, resposta, proximo) => {
    const produto = bancoDeDados.excluirProduto(requisicao.params.id)
    resposta.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`O servidor está executando na porta ${porta}.`)
})
