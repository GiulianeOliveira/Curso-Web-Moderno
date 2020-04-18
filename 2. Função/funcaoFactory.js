// É uma forma de criar um objeto, é uma função que sempre retorna um objeto.
function criarPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        falar(){
            console.log(`Meu nome é ${nome} ${sobrenome}`)
        }
    }
}

//const objeto = criarPessoa('Giuliane', 'Oliveira')
//const {nome, sobrenome} = objeto

const pessoa1 = criarPessoa('Giuliane', 'Oliveira')
pessoa1.falar()
