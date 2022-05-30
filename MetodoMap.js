const nums = [1,2,3,4,5]

//gerar o dobro
let resultado = nums.map(e => 2*e)
console.log(resultado)


const soma10 = e => e+ 10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(',', '.')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 } ',
    '{ "nome": "caderno", "preco": 13.90 } ',
    '{ "nome": "kit de lapis", "preco": 41.22 } ',
    '{ "nome": "caneta", "preco": 7.50 } '
]

const paraObj = json => JSON.parse(json)
apenasPreco = produto => produto.preco

const resultado2 = carrinho.map(paraObj).map(apenasPreco)
console.log(resultado2)
