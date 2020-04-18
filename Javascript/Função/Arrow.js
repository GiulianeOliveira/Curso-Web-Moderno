let Dobro = function(a){
    return 2 * a
}
console.log(Dobro(5))

let D = a => {
    return 2*a
}
console.log(D(5))

let db = a => 2*a //Quando possui apenas uma linha de código, o retorno fica implícito
console.log(db(5))

let Ola = function(){
    return 'Olá'
}
console.log(Ola())

let Opa = () => {
    return 'Olá'
}
console.log(Opa())

let Hello = () => 'Olá'
console.log(Hello())

setInterval(fct = () => {   //set interval é tipo um temporizador
    console.log(Hello())
}, 100)
