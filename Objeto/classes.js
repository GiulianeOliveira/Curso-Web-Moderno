/*Recurso novo do Ecmascript 2015(6)*/
class Avo{
    constructor(sobrenome){
        this.sobrenome = 'Silva'
    }
    Mostra(){
        console.log(this.sobrenome, this.idade)
    }
}

class Pai extends Avo{  //Extends é herança
    constructor(sobrenome, idade){
      //  this.idade = idade
        super(sobrenome)
        this.idade = idade
    }
    Mostra(){
        super.Mostra()
        //console.log(this.sobrenome, this.idade)
    }
}

class Filho extends Pai{    //cadeia de protótipos..
    constructor(sobrenome, idade=20){
        super(sobrenome)
        this.idade = idade
    }
    //Pode adicionar métodos na classe, encapsular...
    Mostra(){
        super.Mostra()
        //console.log(this.sobrenome, this.idade)
    }
}

const Julia = new Filho('ju',21)
Julia.Mostra()
//console.log(Julia)