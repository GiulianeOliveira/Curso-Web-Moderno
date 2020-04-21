/*Importar modulo A e B de outra pasta*/
const moduloA = require('../modulos/moduloA')
console.log(moduloA)
const moduloB = require('../modulos/moduloB')
console.log(moduloB)

// Importando um módulo que já vem previamente instalado com o node:
/*const http = require('http')
http.createServer((requisicao, resposta) => {
    resposta.write('Olá!')
    resposta.end()
}).listen(8080)*/