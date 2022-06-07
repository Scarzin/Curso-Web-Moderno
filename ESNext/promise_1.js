let a = 1
console.log(a)


const primeiroElemento = (arr) => arr[0]

const primeiraLetra = (str) => str[0]

const letraMinuscula = (letra) => letra.toLowerCase()

let p = new Promise((resolve) => {
    resolve(['ana', 'bia', 'joao', 'pedro'])
})

p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    // .then(v => console.log(v))
    .then(console.log)