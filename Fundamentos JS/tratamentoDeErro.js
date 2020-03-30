const objeto = {nome: 'Giuliane', idade: 20}

function tratarErro(er){
    throw '[ERRO]!'
}
function imprimirGrito(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')
    }
    catch(erro){
        tratarErro(erro)
    }
    finally{
        console.log('Saindo..')
    }
    
}

imprimirGrito(objeto)