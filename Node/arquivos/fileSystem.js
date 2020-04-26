/*Módulo responsável por ler e escrever em arquivos, abrir, fechar */
const file = require('fs') //módulo nativo do node.
const caminho = __dirname + '/arquivoLido.json' // __dirname representa o diretório atual

//Lendo arquivo de forma síncrona: (fica tudo parado esperando a leitura do arquivo).
let conteudo = file.readFileSync(caminho, 'utf-8')

/*conteudo = JSON.parse(conteudo)
console.log(conteudo, typeof(conteudo))*/

//Lendo arquivo de forma assíncrona: 
file.readFile(caminho, 'utf-8', (erro, conteudo) => { // Utiliza uma callback, assim, quando o arquivo for lido a callback é chamada.
    const config = JSON.parse(conteudo)
    console.log(config)
})

// Acessar um arquivo json de maneira mais simples:
const acessarJSON = require('./arquivoLido.json') // Executa de forma síncrona..
console.log(acessarJSON, typeof(acessarJSON)) // o json na sua requisição, já retorna sendo um objeto

// Lendo todos os arquivos de uma pasta:
file.readdir(__dirname, (erro, conteudo) => {
    console.log('Conteúdo da pasta: ')
    console.log(conteudo)
})