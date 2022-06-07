function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('ocorreu um erro')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('testando...', 0.5)
    .then(v => `valor: ${v}`)
    .then(v=> console.log(v), e => console.log(`erro: ${e}`))
    .then(() => console.log('quase fim'))
    .catch(e => console.log(`catch: ${e}`))
    .then(() => console.log('fim'))