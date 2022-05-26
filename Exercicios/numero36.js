function multArray(numArray, razao) {
    for (let i = 0; i < numArray.length; i++) {
        numArray[i] = numArray[i] * razao
    }
    console.log(numArray)
}

function multArray2(numArray, razao) {
    let newArr = []
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] >= 5) {
            newArr.push(numArray[i] * razao)
        }
    }
    console.log(newArr)
}
    


multArray([1,3,5], 2)
multArray2([1,3,5,7,8], 2)