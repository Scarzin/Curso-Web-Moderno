function darConceito(notas) {
    for (i in notas){
        if (notas[i] >= 9) {
            console.log(`${notas[i]}: A`)
        } else if (notas[i] >= 7) {
            console.log(`${notas[i]}: B`)
        } else if (notas[i] >= 5) {
            console.log(`${notas[i]}: C`)
        } else if (notas[i] < 5) {
            console.log(`${notas[i]}: D`)
        }
    }
}

arrayNotas = [9.7, 5.6, 7.8, 3.2]
darConceito(arrayNotas)