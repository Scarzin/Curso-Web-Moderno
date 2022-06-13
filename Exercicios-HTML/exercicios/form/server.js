const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    
    resp.send('<h1>Parabéns. Usuário Incluido!!!</h1><br><a href="http://127.0.0.1:5500/Exercicios-HTML/index.html">Voltar 2</a>')
})


app.listen(5500)