function gerarNum(min, max) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const random = parseInt(Math.random() * fator) + min
        resolve(random)
    })
}

gerarNum(1, 10)
    .then(num => num * 10)
    .then(numX10 => `o numero gerado vezes 10 eh: ${numX10}`)
    .then(console.log)