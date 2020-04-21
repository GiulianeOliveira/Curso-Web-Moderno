/*A cada import uma nova requisição será criada e os valores poderão ser diferentes 
graças a função factory*/
module.exports = () => {
    return {
        valor: 1,
        incrementa(){
            this.valor++
        }
    }
}