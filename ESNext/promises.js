// promises é usado quando se deseja ter processamento assíncrono
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => { // Callback, resolve será chamado quando a promise for atendida
        setTimeout(() => { // Simulando algo que leve um determinado tempo, por isso o setTime
            resolve(frase)
        }, segundos * 1000)
    })
}
falarDepoisDe(3, 'Olá')
    .then(frase => frase.concat('!!!!!!')) // Quando a promise é resolvida deve passar uma função then em seguida
    .then(outraFrase => console.log(outraFrase))
    .catch(erro => { // Tratando o erro, usa-se o .catch e é chamado apenas uma vez, ao contrário do .then
        console.log(erro) 
    })

// **OBS: Promises aceita apenas um único parâmetro!!
