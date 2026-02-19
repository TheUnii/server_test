const express = require('express');
const app = express();
const port = 4000

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render('form');
})

app.use(express.urlencoded())

app.post("/letter", (req, res) => {
    const formData = req.body
    res.render("result", formData)
})


app.listen(port, () => {
  console.log(`Сервер запущен`)
})