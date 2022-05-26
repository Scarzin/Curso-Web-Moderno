function contarNegativos(Arr) {
    let contagem = 0
    Arr.forEach(num => {
        if (num < 0) {
            contagem++
        }
    });

    console.log(contagem)
}

const arr1 = [1, 3, 7, -3, -5, 2, 4,-9]
const arr2 = [-1, 4, -6, -7, 2, 3, 4, -2]

contarNegativos(arr1)
contarNegativos(arr2)