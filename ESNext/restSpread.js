// Operador rest(juntar)/spread(espalhar)

// Usar spread com objeto:
const funcionario = {nome: 'Pedro', salario: 1700.00}
const clone = {ativo: true, ...funcionario} // pega todos os atributos de funcionario e acrescenta nesse objeto
console.log(clone)

// Usando spread em um array:
const grupoA = [1,2,3,4]
const cloneA = [...grupoA, 5] // pega todos os elementos do array grupoA e acrescenta no array cloneA
console.log(cloneA)
