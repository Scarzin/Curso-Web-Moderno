function filterCaroFragil(caro) {
    const produtos = [
        { nome: 'note', preco: 2499, fragil: true },
        { nome: 'ipad', preco: 4199, fragil: true },
        { nome: 'copo de vidro', preco: 12.49, fragil: true },
        { nome: 'copo de plastico', preco: 18.99, fragil: false }
    ]
    const produtoCaro = (produto) => produto.preco > caro
    const produtoFragil = (produto) => produto.fragil

    console.log(produtos.filter(produtoCaro).filter(produtoFragil))
}

filterCaroFragil(10)