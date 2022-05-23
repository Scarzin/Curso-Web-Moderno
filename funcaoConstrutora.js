function Carro(maxSpeed = 200, delta = 5) {
    //attb privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= maxSpeed) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = maxSpeed
        }
    }

    //metodo publico
    this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
