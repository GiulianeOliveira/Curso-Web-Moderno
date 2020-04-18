/*Object.seal "sela" um objeto, ou seja, não é possível adicionar novos atributos,
nem excluir atributos existentes, mas pode-se alterar os atributos existentes*/

const pessoa = Object.seal({
    nome: 'Giuliane', idade: 20
})
pessoa.sobrenome = 'Oliveira' // Não adiciona um atributo novo
delete(pessoa.idade) // Não exclui atributos existentes
pessoa.nome = 'Giu' // Pode alterar atributos existentes
console.log(pessoa)
console.log(Object.isSealed(pessoa)) // Testa se o objeto está selado