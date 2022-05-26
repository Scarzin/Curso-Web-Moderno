function progAritmetica(tamanho, inicio, razao) {
    let nums = [inicio]
    for (let i = 1; i < tamanho; i++) {
          nums.push(nums[nums.length - 1] * razao)
    }

    console.log(nums)
    console.log(nums.reduce((a, b) => a + b))
}


function progGeometrica(tamanho, inicio, razao) {
    let nums = [inicio]
    for (let i = 1; i < tamanho; i++) {
          nums.push(nums[nums.length - 1] + razao)
    }

    console.log(nums)
    console.log(nums.reduce((a, b) => a + b))
}

progAritmetica(5,1,3)
progGeometrica(5,1,3)