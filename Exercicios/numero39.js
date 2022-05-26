let x = [1,2,3]
let y = [4,5,6]

function trocarArray(x, y) {
    console.log(`pre-troca: 1: ${x} 2: ${y}`)
    for (let i = 0; i < x.length; i++) {
        [x[i],y[i]]=[y[i],x[i]]
    }
    return console.log(`pos-troca: 1: ${x} 2: ${y}`)
}


trocarArray(x,y)