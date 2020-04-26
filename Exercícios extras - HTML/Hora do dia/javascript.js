const carrega = () => {
    let imagem = document.querySelector('img#imagem') 
    let escrevehorario = document.querySelector('div#horas')

    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    Data()
    escrevehorario.innerHTML = `Horário: ${hora}:${minutos}:${segundos}`

    if(hora > 0 && hora <= 12){
        imagem.src = 'manha.png'
        document.body.style.background = '#e2cd2f' 
        document.body.style.color = '#e2cd2f' 
    }
    else if(hora > 12 && hora <= 18){
        imagem.src = 'tarde.png'
        document.body.style.background = '#b9841f'
        document.body.style.color = '#b9841f'
    }
    else{
        imagem.src = 'noite.png'
        document.body.style.background = '#515196'
        document.body.style.color = '#515196'
    }
}
const Data = () => {
    let escrevedata = document.querySelector('div#data')
    let data = new Date()
    let dia = data.getDay()
    let mes = data.getMonth()
    let ano = data.getFullYear()

    escrevedata.innerHTML = `Hoje é dia ${dia}/${mes}/${ano}`
    if(dia < 9){
        escrevedata.innerHTML = `Hoje é dia 0${dia}`
    }
    else{
        escrevedata.innerHTML = `Hoje é dia ${dia}`
    }
    if(mes < 9){
        escrevedata.innerHTML += `/0${mes}`
    }
    else{ 
        escrevedata.innerHTML += `/${mes}`
    }
    escrevedata.innerHTML += `/${ano}`
}