/*Object.preventExtensions função que não permite que um objeto seja estendido, ou seja,
não permite adicionar novos atributos, apenas modificá-los ou deletá-los.*/

const pessoa = Object.preventExtensions({
    nome: 'Giuliane', idade: 20
})
delete(pessoa.idade) //Pode remover um atributo
pessoa.sobrenome = 'Oliveira' //Não pode adicionar um atributo novo
pessoa.nome = 'Giu' //Pode alterar um atributo existente
console.log(pessoa)
console.log(Object.isExtensible(pessoa)) // Testa se o objeto pode ser estendido

