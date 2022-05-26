function foraDentro(Arr) {
    let fora = 0
    let dentro = 0

    for (let i = 0; i < Arr.length; i++) {
        if (Arr[i] > 20 || Arr[i] < 10) {
            fora++
        } else {
            dentro++
        }
    }
    console.log(`fora: ${fora}, dentro: ${dentro}`)
}

const arr1 = [1,3,4,11,3,14,3,4,19,15,20]
const arr2 = [1,4,9,20,10,15,13]

foraDentro(arr1)
foraDentro(arr2)