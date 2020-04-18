const ob = {
    saudacao: 'Olá!!!',
    falar(){
        console.log(`${this.saudacao}`)
        this.saudacao = 'Trocou'
    }
}

const fala = ob.falar.bind(ob)  //Bind serve para que eu possa referenciar o this pertencente ao objeto passado como parametro
fala()

console.log(ob.saudacao)
