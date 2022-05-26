function mediaDoArr(Arr) {
    somatorio = Arr.reduce((a, b) => a + b) 
    return somatorio / Arr.length
}

const arr1 = [1,3,4,6,7,8]
const arr2 = [3,3,5,6,8,9]

console.log(mediaDoArr(arr1))
console.log(mediaDoArr(arr2))
