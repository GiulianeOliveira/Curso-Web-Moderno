/*Uma forma de criar um novo objeto já herdando outro é o Object.create(), assim ao invés de o novo
objeto apontar para a função object, ele apontará para o objeto herança definido na função create.*/
const pai = {nome: 'Paulo', corCabelo: 'Castanho'}
const filha1 = Object.create(pai, {
    nome: {value: 'Julia', enumerable: true, writable: false}, //Cria um novo atributo e define suas propriedades
})
for(let key in filha1){
    //console.log(key)    //Pega os atributos próprios do objeto e também os herdados 
    if(filha1.hasOwnProperty(key) == true){ //FUnção para saber quais atributos são próprios do objeto
        console.log(key)
    }
    else{
        console.log('Herança: '+key)
    }

}