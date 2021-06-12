const express = require("express")
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

//rotas
app.get("/", (req, res) => {
    res.render("home")
})

app.get("/produtos", (req, res) => {
    res.render("produtos")
})

app.listen(8080, () => {
    console.log("App rodando!")
})