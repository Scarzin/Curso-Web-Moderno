const alunos = [
    {nome: 'joao', nota: 7.3, bolsista: false },
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'ana', nota: 8.7, bolsista: true},
]

// desafio 1: todos alunos sao bolsistas ?(com reduce)
const getBolsistas = alunos.map(a => a.bolsista)
const saoBolsistas = getBolsistas.reduce(a => a)
console.log(saoBolsistas)


//desafio 2: algum aluno eh bolsista ?

const alunosBolsistas = alunos.filter(a => a.bolsista).map(a => a.bolsista)
const algumBolsista = alunosBolsistas.reduce(a => a)
console.log(algumBolsista)


