function maxMin(Arr) {
    let max = Math.max(...Arr)
    let min = Math.min(...Arr)
    console.log(`max: ${max}, min:${min}`)
}

const arr1 = [1, 5, 7, 2, 1, 9, 34, 23]

const arr2 = [1.4, -7, 35, 21, 7, -45, 32]

maxMin(arr1)
maxMin(arr2)