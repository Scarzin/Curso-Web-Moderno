// tagged templates - processa o tempalte dentro da funcao

function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `(${aluno} esta ${situacao})`)