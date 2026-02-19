const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Задание 1
server.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Задание 2
server.get('/user/:id', (req, res) => {
    const ID = req.params.id; 
    res.json({ id: ID }); 
});

// Задание 3
server.get('/book/:author/:title', (req, res) => {
    const author = req.params.author;
    const title = req.params.title;
    
    res.json({ author: author, title: title });
});

// Задание 4
server.get('/search', (req, res) => {
    const q = req.query.q; 
    const limit = req.query.limit;
    
    res.json({ q: q, limit: limit });
});

// Задание 5
server.post('/echo', (req, res) => {
    const data = req.body;

    res.json(data);
});

// Задание 6 
server.post('/form', (req, res) => {
    const form_data = req.body;
    
    res.json(form_data);
});

// Задание 7 
server.get('/data', (req, res) => {
    res.json({ method: "GET" });
});

server.post('/data', (req, res) => {
    res.json({
        method: "POST",
        body: req.body 
    });
});

// Задание 8 
server.get('/check/:number', (req, res) => {
    const num = parseInt(req.params.number);
    if (num % 2 === 0) {
        res.json({ result: "even" }); 
    } else {
        res.json({ result: "odd" });  
    }
});

//Задание 9
server.post('/analyze', (req, res) => {
    const text  = req.body.text;
    const numbers = req.body.numbers;
    let sums = 0;
    for(let i = 0; i < numbers.length; i++) {
        sums += numbers[i];
    }
    res.json({
        length: text.length,
        sum: sums,
        average: sums / numbers.length
    });
});

// Задание 10 - Динамический маршрут с валидацией
server.get('/calc/:operation/:a/:b', (req, res) => {
    const operation = String(req.params.operation);
    console.log(operation);
    const a = req.params.a;
    console.log(a);
    const b = req.params.b;
    console.log(b);
    
    let result;
    if (operation === 'add') {
        result = a + b;
    } else if (operation === 'sub') {
        result = a - b;
    } else if (operation === 'mul') {
        result = a * b;
    } else if (operation === 'div') {
        if (b === 0) {
            return res.status(400).json({error: "Нельзя делить на ноль"});
        }
        result = a / b;
    }
    
    res.json({ result: result });
});

server.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});