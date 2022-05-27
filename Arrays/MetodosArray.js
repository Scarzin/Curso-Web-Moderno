const pilotos = ['vettel','alonso','raikkonen','massa']
pilotos.pop() //remove ultimo elemento do array
console.log(pilotos)

pilotos.push('verstappen')//insere por ultimo no array
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos)


//SPLICE() pode add ou remover elementos

//add
pilotos.splice(2,0,'bottas','massa')
console.log(pilotos)

//remover
pilotos.splice(3,1) //massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)

