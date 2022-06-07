//arrow func

const soma = (a,b) => a+b
console.log(soma(2,4))

//arrow func (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametro default
function log(texto = 'node'){
    console.log(texto)
}

log()
log(`sou mais forte`)

//operador REST
function total(...nums) {
    let total = 0
    nums.forEach(n => total += n)
    return total
}
console.log(total(3,2,4,5))