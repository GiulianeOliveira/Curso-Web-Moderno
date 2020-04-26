var lista = []
var resultado = document.querySelector('div#res')

const adicionar = () => {
    let n = document.querySelector('input#txtnumber')
    let numero = Number(n.value)
    if(numero < 1 || numero > 100 || (lista.indexOf(numero) != -1)){
        alert('Valor inválido ou já encontrado na lista.')
    }
    else{
            lista.push(numero)
            let item = document.createElement('option')
            item.text = `Valor ${numero} adicionado.`
            txtsel.appendChild(item)
            resultado.innerHTML = ' '
    }
}
const fim = () => {
    let soma = 0, media = 0, maior = lista[0], menor = lista[0]
    let count = 0
    
    for(let count in lista){
        //resultado.innerHTML += `${lista[count]} `
       soma += lista[count]
       if(lista[count] > maior){
            maior = lista[count]
       }
       if(lista[count] < menor){
        menor = lista[count]
       }
    }
    media = soma / lista.length
    resultado.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    //resultado.innerHTML += `${lista}`
}

/*CRIANDO UM SELETOR DINAMICO DIRETO NO JS:
let item = document.createElement('option')
item.text = `${i} x ${num} = ${num*i}`
seletor.appendChild(item) -> Manda o item pro seletor*/