const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (funcInicial, funcAtual) => {
    return funcInicial.salario < funcAtual.salario ? funcInicial : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario))
})

console.log('mudei xD')



// obter mulher chinesa com menor salario
// procurar pais:china, genero: mulher
// comparar salarios
// usar metodos arrays

