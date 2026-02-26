const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Задание 1
app.get('/error', (req, res) => {
  try {
    throw new Error('Тестовое исключение');
  } catch (err) {
    console.log(err.message);
  }
});

//Задание 2
app.post('/parse-json', (req, res) => {
  try {
    const request = req.body;
    const parsed = JSON.parse(request);
    console.log(parsed)

  } catch (err) {
    console.log(err.message);
    res.status(400).json();
  }
});

//Задание 3
app.get('/user', (req, res) => {
  try {
    const userName = req.query.name;
    
    if (userName === '') {
      throw new Error('Имя обязательно');
    }
    res.status(200).json(userName);
  } catch (err) {
    console.log(err.message);
    res.status(400).json();
  }
});

//Задание 4
app.get('/fetch', async (req, res, next) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err.message);
    err.status = 503;
    next(err);
  }
});

//Задание 5
app.get('/test', (req, res) => {
  throw new Error('Тестовая ошибка');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500);
});

//Задание 6
app.get('/', (req, res) => {
  try {
    throw new Error('Произошла ошибка');
  } catch (err) {
    fs.appendFile(`[${Date()}] Сообщение ошибки: ${err.message}\n`
    );
    res.status(500);
  }
});

//Задание 7
app.get('/divide', (req, res) => {
  try {
    const {a, b} = req.query;
    const numA = Number(a);
    const numB = Number(b);

    if (numB === 0) {
      throw new Error('Деление на ноль');
    }
    
    const result = numA / numB;
    res.json(result);
    
  } catch (err) {
    console.log('Ошибка:', err.message);

    if (err.message === 'Деление на ноль') {
      res.status(400).json(None);
    } 
    else {
      res.status(500).json(None);
    }
  }
});

//Задание 8
app.get('/data', (req, res, next) => {
  try {
    const data = null;
    if (!data) {
      throw new Error('Данные не найдены');
    }
    
    res.json({ data: data });
    
  } catch (err) {
    next(err);
  }
});

//Задание 9
app.get('/read-file', (req, res) => {
  try {

    const data = fs.readFileSync();

    res.send(data);
    
  } catch (err) {
    console.log('Ошибка:', err.message);

    if (err.code === 'ENOENT') {
      res.status(404);
    } else {
      res.status(500);
    }
  }
});

//Задача 10 
app.post('/process', (req, res) => {
  try {
    let userData;
    try {
      userData = JSON.parse(req.body);
    } catch (parseErr) {
      throw new Error('Ошибка в json')
    }
    if (!userData.email) {
      throw new Error('нет email')
    }
    
    fs.writeFileSync('user_data.json', userData)
    
    res.status(200).json(userData);
    
  } catch (err) {
    console.log(err.message);
  
    res.status(422).json(None);
  }
});


server.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});