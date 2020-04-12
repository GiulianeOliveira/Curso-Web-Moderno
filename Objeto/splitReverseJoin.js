/* split cria um vetor de elementos separados conforme a expressão definida como parametro.
split(coloca-se a expressão que irá separar os argumentos em um vetor)*/
const nome = 'Giuliane'
console.log('Teste split:'+'\n'+nome.split('')) //Conforme a expressão '', será separado por espaço cada letra da palavra
console.log(nome.split('i')) //Conforme a expressão 'i', a cada i, será separada a palavra

/* reverse inverte todos os elementos de um vetor*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('\n'+'Teste reverse:'+'\n'+numeros.reverse())

const letras = ['a', 'b', 'c', 'd', 'e']
console.log(letras.reverse())


/*join(coloca-se expressão que irá concatenar todos os elementos de um vetor*/
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('\n'+'Teste join:'+'\n'+valores.join('')) // Junta os elementos sem espaço

const letra = ['a', 'b', 'c', 'd', 'e']
console.log(letra.join(' ')) // Junta os elementos com espaço

/*Função que inverte uma string: */
console.log('\n'+'Teste como inverter uma string:')
const junta = string =>  string.split('').reverse().join('').toLowerCase()
console.log(junta('Qualquer coisa.'))

/*Também posso adicioná-la a função String tornando-a global para todo um projeto: */
String.prototype.inverteString = function(){
    return this.split('').reverse().join('')
} 

console.log('Giu'.inverteString())