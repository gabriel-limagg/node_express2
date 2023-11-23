const express = require("express")
const path = require("path")


const app = express()

const caminhoBase = path.join(__dirname, "templantes")

app.post('/cadstrar/salvar', (requisiçao, respotas)=>)

app.get('/cadastrar',(requisiçao, resposta) => {
    resposta.sendFile(`${caminhoBase}/cadastro.html`)
})
app.get('/usuario/:id ',(requisiçao, resposta)=>{
const id = requisiçao.params.id
console.log(id)
resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (requisiçao, resposta)=>{
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, ()=>{
    console.log("servidor rodando na porta 3000")
})