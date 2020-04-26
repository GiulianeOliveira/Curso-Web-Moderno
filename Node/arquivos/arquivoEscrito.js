const file = require('fs') // módulo nativo node.

const produto = {
    nome: "Celular",
    preco: 1599.90, 
    desconto: 0.20
}

// Escrevendo este objeto no disco de forma que ele seja um json:
file.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (erro) => {
    console.log(erro || 'Arquivo Salvo!') // Se true, imprime o erro, se false imprime arquivo salvo
}) 
// file.writeFile(CAMINHO DO ARQUIVO + NOME DO ARQUIVO QUE SERÁ CRIADO, CONTEÚDO PRESENTE NESTE ARQUIVO, CALLBACK PARA CASO HAJA ALGUM ERRO)
