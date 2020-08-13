const express = require('express') //Importa o express
const app = express() //Instancia
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (requisicao, resposta)=>{
    console.log(requisicao.body) //Mostra todas as infos do form
    resposta.send('Tudo certo!')
})

app.listen(3003)
