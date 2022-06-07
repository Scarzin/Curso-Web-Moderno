function gerarNumero(min, max, numerosProibidos){
    if(min>max) {[max,min] = [min,max]}
    return new Promise((resolve,reject)=> {
        const fator = max-min +1
        const aleatorio = parseInt(Math.random()*fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('numero foi proibido')
        } else {
            resolve(aleatorio)
        }
    })
}


gerarNumero(1,5,[2,3,4])
.then(console.log)
.catch(console.log)