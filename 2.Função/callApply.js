function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${((this.preco * (1 - this.desconto) * (1 - imposto)).toFixed(2))}` 
}

const produto = { //objeto
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}
const carro = {preco: 4990, desconto: 0.20}
console.log(getPreco.call(produto, 0.1, 'U$')) //na call, pega o contexto e depois os parâmetros para a função get chamada
console.log(getPreco.apply(carro, [0.2, '$BRL'])) //na apply, primeiro parametro é o objeto passado como contexto da funçaõ e os parametros
//da função get estarão em um array



