function imprimirImpar(inicio, fim) {
    if (fim < inicio) {
        [inicio, fim] = [fim, inicio]
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}

imprimirImpar(21,3)
