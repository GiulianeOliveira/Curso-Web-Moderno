const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`  //Faz com que seja chamado o status() herdado, o carro()
    }
    //__proto__: carro prototipa assim ou com setPrototypeOf
}

Object.setPrototypeOf(volvo, carro) //Outra forma de prototipar
Object.setPrototypeOf(ferrari, carro)
console.log(ferrari.status())
//console.log(volvo.status())