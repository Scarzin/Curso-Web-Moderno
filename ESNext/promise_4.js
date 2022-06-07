function gerarNum(min, max, tempo) {
    if (min > max) {
        [min, max] = [max, min]
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const random = parseInt(Math.random() * fator) + min
            resolve(random)          
        }, tempo);
    })
}

function variosNum() {
    return Promise.all([
        gerarNum(1, 60, 2000),
        gerarNum(1, 60, 1000),
        gerarNum(1, 60, 500),
        gerarNum(1, 60, 3000),
        gerarNum(1, 60, 100),
        gerarNum(1, 60, 1500)
    ])
}

variosNum().then(console.log)