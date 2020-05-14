// A partir do objeto process podemos ler dados e escrever dados pro usuario.

const anonimo = process.argv.indexOf('-a') !== -1 //flag -a, é um param pego diretamente da chamada do terminal
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Olá, Anônimo!\n') // Saída no console
    process.exit() // Mata o processo
}
else{
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => { // on data é quando você digita algo e aperta enter, o \n fica salvo junto da string
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Olá, ${nome}!\n`)
        process.exit() // Encerrar o processo
    })
}