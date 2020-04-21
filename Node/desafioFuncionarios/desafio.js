/*O desafio é obter da lista de funcionários do link, a mulher chinesa com menor salário.*/

// O axios faz requisições para obter informações que estão remotas
const axios = require('axios') // Importa o axios para este arquivo
const link = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

axios.get(link).then(response => {
    const funcionarios = response.data // .data possui a lista de funcionarios, logo a const funcionarios recebe esta lista que estava em um servidor remoto
  
    const paisChina = elemento => elemento.pais == 'China' || elemento.pais == 'china'
    const apenasMulher = elemento => elemento.genero == 'F'
    const menorSalario = (funcAnterior, funcAtual) => {
        if(funcAnterior.salario > funcAtual.salario){
            return funcAtual
        }
        else return funcAnterior
    }
    const func = funcionarios
        .filter(paisChina)
        .filter(apenasMulher)
        .reduce(menorSalario)

    console.log(func)
}) 

// .get() é usado para obter informações sobre o servidor
// .then() é usado quando a requisição get retornar para obter o conteúdo do arquivo
