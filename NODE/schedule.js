const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('executando tarefa 1!', new Date().getSeconds())
})

setTimeout(() => {
    tarefa1.cancel()
    console.log('CANCELANDO TAREFA 1!')
}, 20000);

// const regra = new schedule.RecurrenceRule()
// regra.dayOfWeek = [new schedule.Range(1,5)]
// regra.hour = 15
// regra.second = 30

// const tarefa2 = schedule.scheduleJob(regra, function() {
//     console.log('executando tarefa 2', new Date().getSeconds())
// })