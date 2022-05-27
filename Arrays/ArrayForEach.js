const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice} : ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)