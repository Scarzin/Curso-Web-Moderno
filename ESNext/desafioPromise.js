const fs = require('fs')
const path = require('path')


function exibirConteudo(arquivo) {
    return new Promise(resolve => {
        const conteudo = fs.readFile(arquivo, (_, conteudo) => {
            resolve(conteudo)
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

exibirConteudo(caminho)
    .then(conteudo => conteudo.toString())
    .then(console.log)