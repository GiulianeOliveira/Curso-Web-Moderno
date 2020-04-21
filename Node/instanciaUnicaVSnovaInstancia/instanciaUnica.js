/* O node faz cache dos módulos, ou seja, quando você importa um arquivo,
mesmo que coloque em variaveis diferentes o import, eles sempre terão o mesmo valor*/
module.exports = {
    valor: 1, 
    incrementa(){
        this.valor++
    }
}