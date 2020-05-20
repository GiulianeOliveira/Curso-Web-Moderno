// Utilizando callbacks aninhadas
const http = require('http')

const getTurma = (letra, callback) => {
    letra = letra.toUpperCase()
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, resposta => {
        let resultado = ''

        resposta.on('data', dados => {
            resultado += dados
        })
        resposta.on('end', () => {
           callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    //console.log(nomes)

    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        //console.log(nomes)
    
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})