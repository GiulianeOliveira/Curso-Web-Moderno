const verificar = () => {
    let data = new Date()
    let ano = data.getFullYear()
    let form_ano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    let form_sexo = document.getElementsByName('radsex')
    
    if(form_ano.value >= 0 && form_ano.value <= ano){
        let idade = 0
        let gênero = ''
        let img = document.createElement('img') //Criando um elemento do tipo imagem
        img.setAttribute('id', 'foto') //Criando um id para a imagem
        //document.body.style.background = 'Gray'
        idade = ano - Number(form_ano.value)
        
        if(form_sexo[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if(idade >= 12 && idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if(idade >= 21 && idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }   
        }
        else if(form_sexo[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if(idade >= 12 && idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if(idade >= 21 && idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }  
        }
        res.style.textAlign = 'center' //Centralizar direto no JS ao invés de pelo css
        res.innerHTML = `Sua idade é ${idade} e você é ${gênero}.`
        res.appendChild(img)
    }
    else {
        res.innerHTML = 'Erro! Valor informado inexistente ou inválido!'
    }
}