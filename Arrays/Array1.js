let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
console.log(aprovados[3])
aprovados.push('joao')
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['bia','carlos','ana']
aprovados.splice(1, 0, 'elemento1', 'elemento2')
console.log(aprovados)