//Função normal:
function imprimeMult(a, b=0){
    return a*b
}
console.log(imprimeMult(3,5))

//Função dentro de uma variável:
const mult = function(a,b=0){return a*b}
console.log(mult(3,4))

//Arrow function:
const m = (a,b=0) => {
    return a*b
}
console.log(m(2,5))

//Arrow function com retorno implícito:
const mt = (a,b=0) => a*b //Quando a função possui apenas uma linha de código, pode fazer isto
console.log(mt(2,2))
