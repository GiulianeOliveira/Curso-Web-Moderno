// O pacote node-schedule permite o agendamento de tarefas via temporizador.

const schedule = require('node-schedule')

// Criando a primeira tarefa temporizada:
const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 3', function(){
    console.log('Executando tarefa 1', new Date().getSeconds())

}) // executa a função associada de 5 em 5 segs, qualquer min, as 12h, qualquer mes, qualquer dia do mes, toda terça-feira
/*
(/*5 faz com que execute de 5 em 5 segundos, se fosse sem, executaria sempre a cada segundo 5)
(/*(segundos) (minutos) (horas) (mes) (dia do mes) (dia da semana, 0,1,2..))
*/

// Temporizador do próprio javascript
setTimeout(function (){
    tarefa1.cancel() // Cancelando a tarefa 1
    console.log('Cancelando tarefa!!')
}, 20000)

const regra = new schedule.RecurrenceRule() // Regra de recorrência
regra.dayOfWeek = [new schedule.Range(1,5)] // Dias da semana que vai ocorrer a ação
regra.hour = 16
regra.second = 5

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2', new Date().getSeconds())
})