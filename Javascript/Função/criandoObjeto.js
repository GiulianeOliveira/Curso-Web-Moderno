function Familia(membro = 'Vazio', idade = 0){
    let fase = 'Vazio'
    if(idade <= 0){
        fase = 'Bebê'
    } else if(idade > 0 && idade <=12){
        fase = 'Criança'
    }
    if(idade > 12 && idade <= 17){
        fase = 'Adolescente'
    }
    else if(idade >= 18 && idade < 60){
        fase = 'Adulto'
    }
    if(idade >= 60){
        fase = 'Idoso'
    }
    this.getIdade = () => console.log(`${fase} de ${idade} anos.`)
}
const Mariana = new Familia('Mãe',45)
const Pedro = new Familia('Pai', 46)
const Julia = new Familia('Filha', 13)
const Andrew = new Familia('Filho', 17)

Mariana.getIdade()
Pedro.getIdade()
Julia.getIdade()
Andrew.getIdade()