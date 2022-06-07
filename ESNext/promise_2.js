
setTimeout(() => {
    console.log('executando callback')

    setTimeout(() => {
        console.log('executando callback')

        setTimeout(() => {
            console.log('executando callback')

        }, 2000);
    }, 2000);
}, 2000);

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('executando promise')
            resolve()
        }, tempo);
    })
}

esperarPor().then(esperarPor).then(esperarPor)