const express = require('express') //Importa o express
const app = express() //Instancia
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (requisicao, resposta)=>{
    console.log(requisicao.body) //Mostra todas as infos do form
    resposta.send('<h1>Usuário incluído.</h1>')
})
app.post('/usuarios/:id', (requisicao, resposta)=>{
    console.log(requisicao.params.id)
    console.log(requisicao.body)
    resposta.send('<h1>Usuário Alterado!</h1>')
})

app.listen(3003)
