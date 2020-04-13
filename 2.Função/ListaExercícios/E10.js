/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível
por 3 e retorne true ou false.*/

const verifica = (valor) => {
    if(valor%3 == 0){
        return true
    }
    else return false
}

console.log(verifica(9))