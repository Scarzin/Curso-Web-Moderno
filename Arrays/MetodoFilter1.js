const produtos = [
    {nome: 'note', preco: 2499, fragil: true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]
const produtoCaro = (produto) => produto.preco > 1000
const produtoFragil = (produto) => produto.fragil = true

console.log(produtos.filter(produtoCaro).filter(produtoFragil))

