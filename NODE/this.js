console.log(this ===global)
console.log(this === module)
console.log(this === module.exports)


function logThis() {
    console.log('dentro dde uma funcao:')
    console.log(this === exports)
    console.log(this === global)

}

logThis()