const aluno = { nome: 'Giuliane', idade: 20}

console.log(aluno)

function media({nome: n, idade}){
    n = 'Batatinha'
    console.log(n + ' ' + idade)
}
media(aluno)
let {nome: s, idade: a} = aluno

console.log(aluno.nome)