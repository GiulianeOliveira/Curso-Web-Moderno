module.exports = {  // Forma mais comum de exportar, criando um objeto
    aguarde: 'Aguarde',
    falar(){
        return 'Olá'
    }
}

/*OBS: apenas o que for informado dentro do module.exports estará visível para o arquivo que 
importá-lo!*/