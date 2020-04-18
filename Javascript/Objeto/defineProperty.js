const pessoa = {
    nome: 'Giuliane',
    idade: 20,
    peso: 60
}
/* Permite criar um novo atributo para o objeto selecionado e escolher se ele pode
ou não ser visto dentro do objeto (enumerable), se ele pode ou não ser modificado (writable)
e atribui-se um valor a este atributo (value)
*/
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: false,
    value: '19/07/1999'
})
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))