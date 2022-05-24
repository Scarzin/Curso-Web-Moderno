class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`meu nome eh ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

const criarPessoa = nome => {
    return {
    falar: () => console.log(`meu nome eh ${nome}`)
    }
}

const p2 = criarPessoa('Pedro')
p2.falar()