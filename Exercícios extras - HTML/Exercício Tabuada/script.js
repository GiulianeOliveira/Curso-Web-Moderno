const tabuada = () => {
    let numero = document.querySelector('input#txtnum')
    let seletor = document.getElementById('seltab')
    
    if(numero.value.length == 0){
        alert('[ERRO]! Informe um número.')
    }
    else{
        let num = Number(numero.value)
        seletor.innerHTML = ''
        for(let i = 0; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${i} x ${num} = ${num*i}`
            item.value = `tab${i}`
            seletor.appendChild(item)
        }
        
    }




}