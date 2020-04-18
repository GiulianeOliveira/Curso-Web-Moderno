//Basicamente é uma função sem nome
/*const soma = function(a,b){
    return a+b
}*/
const soma = (a,b) => a+b

/*const imprime = function(a,b,resultado=soma){
    console.log(resultado(a,b))

}*/
const imprime = (a,b,resultado=soma) => console.log(resultado(a,b))
imprime(2,5)

