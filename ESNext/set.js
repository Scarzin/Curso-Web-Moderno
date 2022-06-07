const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('palmeiras').add('corinthians')
times.add('flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)