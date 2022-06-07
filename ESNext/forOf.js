for (let letra of 'cod3r') {
    console.log(letra)
}

const assuntosEcma = ['map', 'set', 'reduce']

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['map', {abordado: true}],
    ['set', {abordado: true}],
    ['promise', {abordado: false}],
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
}

for (let [chv, val] of assuntosMap.entries()) {
    console.log(chv,val)
}


const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}