/*O desafio é receber três arquivos json de três turmas de alunos diferentes e listar todos os nomes dos alunos.*/
// O axios faz requisições para obter informações que estão remotas
const axios = require('axios')
const linkTurmaA = 'http://files.cod3r.com.br/curso-js/turmaA.json'
const linkTurmaB = 'http://files.cod3r.com.br/curso-js/turmaB.json'
const linkTurmaC = 'http://files.cod3r.com.br/curso-js/turmaC.json'
const apenasNome = aluno => aluno.nome

axios.get(linkTurmaA).then((response) => {
    const nomesA = response.data // Obtém o json
    const turmaA = nomesA.map(apenasNome) // Cria um array com os nomes dos alunos
    console.log(turmaA)
})

axios.get(linkTurmaB).then(response => {
    const nomesB = response.data
    const turmaB = nomesB.map(apenasNome)
    console.log(turmaB)
})

axios.get(linkTurmaC).then(response => {
    const nomesC = response.data
    const turmaC = nomesC.map(apenasNome)
    console.log(turmaC)
})