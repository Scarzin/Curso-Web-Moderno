const produto = Object.preventExtensions({
    nome: "qualquer", preco: 1.99, tag: "promo"
})

console.log('extensivel:', Object.isExtensible(produto))

produto.nome = "borracha"
produto.descricao = "borracha branca"
delete produto.tag
console.log(produto)

/******************************************************/ 
const pessoa = {nome: "juliana", idade: 35}
Object.seal(pessoa)
console.log("selado:", Object.isSealed(pessoa))

pessoa.sobrenome = "silva"
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


/******************************************************/ 
