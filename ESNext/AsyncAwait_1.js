function esperarPor(tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            resolve()
        }, tempo);
    })
}

// esperarPor(2000)
// .then(() => console.log('executando promise 1'))
// .then(esperarPor)
// .then(() => console.log('executando promise 2'))
// .then(esperarPor)
// .then(() => console.log('executando promise 3'))

function retornarValor(){
return new Promise(resolve => {
    setTimeout(() => {
        console.log('valor retornado')
        resolve(10)
    }, 5000);
})
}

async function retornarValorRapido(){
    return 20
}

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`async/await ${valor}`)
    await esperarPor(1500)
    console.log(`async/await ${valor + 1}`)
    await esperarPor(1500)
    console.log(`async/await ${valor + 2}`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()