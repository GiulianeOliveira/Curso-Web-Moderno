//Serve inicializar um objeto, já que js não possui classe, é tipo uma classe... 
function Carro(velocidadeMaxima = 200, delta = 5){   //Função construtora
    let velocidadeAtual = 0 //Atributo privado, por causa do let
    
    this.acelerar = () => { //método público, por causa do this
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = () => velocidadeAtual //método público, por causa do this, que retorna a velocidade atual
}   
let uno = new Carro //cria um objeto do tipo carro
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())

let camaro = new Carro(400, 40)  //cria outro objeto do tipo carro, com parametros iniciais diferentes
console.log(camaro.getVelocidadeAtual())
camaro.acelerar()
console.log(camaro.getVelocidadeAtual())
