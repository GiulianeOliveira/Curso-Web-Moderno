// Transformando um código assincrono em algo parecido com um sincrono
const http = require('http')

const getTurma = (letra) => {
    letra = letra.toUpperCase()
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) => {
        http.get(url, resposta => {
            let resultado = ''

            resposta.on('data', dados => {
                resultado += dados
            })
            resposta.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (error) {
                    reject(error)
                }
            })
    })
})
}

// Recurso do ES8, o objetivo é simplificar o uso de Promises
let obterAlunos = async () => { // Sempre que estiver lidando com uma fun. que retorne um Promise, pode usar await e essa func só vai pro próx passo se estiver resolvida
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // Uma função async, retorna um objeto do tipo AsyncFunction

obterAlunos().then(alunos => alunos.map(a => a.nome))
             .then(nomes => console.log(nomes))
             