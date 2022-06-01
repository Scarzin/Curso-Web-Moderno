const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./InstanciaNova')()
const contadorD = require('./InstanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA)
console.log(contadorB)

contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorD.inc()
console.log(contadorC)
console.log(contadorD)