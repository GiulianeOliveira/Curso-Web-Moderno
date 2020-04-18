function criarProduto(nomeProd = 'Default', precoProd = 0){
    return{
        nome: nomeProd,
        preco: precoProd,
        desconto: precoProd * 0.2
    }
}
let pc = []   //Vetor de objetos
pc.push(criarProduto('Dell G3', 5000))
pc.push(criarProduto('Dell G5', 6000))
pc.push(criarProduto('Dell G7', 10000))
console.log(pc)
