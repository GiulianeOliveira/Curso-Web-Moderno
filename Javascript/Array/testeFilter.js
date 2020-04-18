const numeros = [1,2,3,4,5,6,7,8,9,10]
const par = (num) => {
    if(num%2 == 0){
        return true
    }
}
let pares = numeros.filter(par)
console.log(pares)

