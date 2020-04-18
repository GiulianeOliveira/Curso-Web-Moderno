const pessoa = {    
    nome: 'Giuliane',
    idade: 20,
    endereco: {
        logradouro: 'Oceanos',
        numero: 74
    }
}
let {nome, idade} = pessoa //Assim, ao invés de invocar pessoa.nome e pessoa.idade você pode invocar uma cópia das variáveis
console.log(nome, idade)

let {nome: n, idade: i} = pessoa //Pode setar variáveis
console.log(n, i)

let {endereco: {logradouro: l, numero: num}} = pessoa
console.log(l, num)