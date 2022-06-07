const techs = new Map()

techs.set('react', {framework: false})
techs.set('angulasr', {framework: true})

console.log(techs.react)
console.log(techs.get('react').framework)

const chavesVariadas = new Map( [
    [function () {}, 'funcao'],
    [{}, 'Objeto'],
    [123, 'numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)