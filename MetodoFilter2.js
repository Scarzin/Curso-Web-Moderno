Array.prototype.filter2 = function(callback) {
    newArr = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this) == true) {
            newArr.push(this[i])
        }        
    }
    return newArr
}



const produtos = [
    { nome: 'note', preco: 2499, fragil: true },
    { nome: 'ipad', preco: 4199, fragil: true },
    { nome: 'copo de vidro', preco: 12.49, fragil: true },
    { nome: 'copo de plastico', preco: 18.99, fragil: false }
]
const produtoCaro = (produto) => produto.preco > 500
const produtoFragil = (produto) => produto.fragil

console.log(produtos.filter2(produtoCaro))
