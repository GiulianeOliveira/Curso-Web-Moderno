function somar(){
    let soma = 0
    for(let i in arguments){    //arguments possui todos os args passados como parametro pra função
        soma += arguments[i]
    }
    return soma
}
console.log(somar(10,15))
console.log(somar('Giuliane', 'Oliveira'))