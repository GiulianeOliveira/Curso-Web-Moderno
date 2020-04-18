function func(f1){
    f1()
}

func(function(){console.log('Olá!!!!')}) //Criei uma função anônima dentro da entrada de parâmetros

function fala(){
    console.log('Sou eu!!')
}
func(fala)  //Passei como parâmetro uma função já existente
