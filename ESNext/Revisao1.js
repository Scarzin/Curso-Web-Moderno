// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)


//template strings
const produro = 'ipad'
console.log(`o ${produro} eh carissimo`)

//destructuring
const [l, e, ...tras] = 'cod3r'
console.log(l,e,tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const { idade: i, nome: n} = { nome: "ana", idade:9}
console.log([i, n])