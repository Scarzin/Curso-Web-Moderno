// operador ... rest(juntar)spread(espalhar)
//rest como param



// rest como obj
const funcionario = {nome: 'maria', salario :1234.99}
const clone = {ativo: true, ...funcionario}
console.log(funcionario, clone)

const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'rafael']
console.log(grupoFinal)