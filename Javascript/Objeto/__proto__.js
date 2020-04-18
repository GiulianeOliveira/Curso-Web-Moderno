/*É baseada em protótipos, tendo uma cadeia de protótipos que é percorrida e 
termina quando é encontrado o atributo desejado ou quando encontra-se a função prototype,
a mesma retorna undefined caso nao seja modificada.*/

//Object.prototype.atributo0 = 'Modificando a função prototype'
const avo = {atributo1: 'Encontrou no avo'}
const pai = {atributo2: 'Encontrou no pai', __proto__: avo}
const filho = {__proto__: pai, atributo3: 'Encontrou no filho'}
console.log(filho.atributo1)

/*Caso haja atributos/métodos de mesmo nome, o primeiro a ser encontrado será retornado,
ou seja, o mais próximo do objeto que está sendo acessado. (Sombreamento)*/

