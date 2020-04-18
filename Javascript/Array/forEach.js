/*É uma função callback que executa uma função para cada elemento do array*/
const pessoa = ['Giuliane', 'João', 'Juliana', 'Gabriel']
pessoa.forEach((nome, indice) => console.log(`${indice}) ${nome}`)) 

/*forEach possui 3 argumentos, nesta ordem: (elemento, indice, array completo)*/
pessoa.forEach(function(elemento, indice, array){
    console.log(`${elemento}[${indice}]\n${array}`)
})

/*Pode invocar uma função declarada anteriormente:*/
const adicionaS = (palavra) => {
    console.log(palavra+'s')
}
pessoa.forEach(nome => {adicionaS(nome)})

/*Também, pode invocar uma função existente:*/
pessoa.forEach(nome => console.log(nome.toUpperCase()))
