function Pessoa(nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`meu nome eh ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()

