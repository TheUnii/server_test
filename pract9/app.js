const express = require('express');
const app = express();
const port = 4000

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/catalog", (req, res) => {
    res.render('catalog');
})

app.get("/contacts", (req, res) => {
    res.render('contacts');
})


app.listen(port, () => {
  console.log(`Сервер запущен`)
})