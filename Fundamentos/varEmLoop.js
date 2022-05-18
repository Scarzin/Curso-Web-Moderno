// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

// console.log('i = ', i)

// for (let i=0; i<10; i++){
//     console.log(i)
// }

// console.log('i = ', i)

const funcs = []

// for (var i = 0; i < 10; i++) {
//     funcs.push(function() {
//         console.log(i)
//     })
// }

// funcs[2]()
// funcs[8]()

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs[6]()
