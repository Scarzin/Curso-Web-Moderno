Array.prototype.map2 = function(callback) {
    newArr=[]
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this))        
    }
    return newArr
}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 } ',
    '{ "nome": "caderno", "preco": 13.90 } ',
    '{ "nome": "kit de lapis", "preco": 41.22 } ',
    '{ "nome": "caneta", "preco": 7.50 } '
]


const paraObj = json => JSON.parse(json)
apenasPreco = produto => produto.preco

const resultado2 = carrinho.map2(paraObj).map2(apenasPreco)
console.log(resultado2)

