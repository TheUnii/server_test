const express = require('express');
const qrcode = require('qrcode');
const app = express();
const port = 3000;

// Устанавливаем EJS как шаблонизатор
app.set('view engine', 'ejs');

// Middleware для обработки данных из формы
app.use(express.urlencoded({ extended: true }));

// Маршрут для главной страницы
app.get('/', (req, res) => {
    res.render('index', { qrcode: null});
});

// Маршрут для генерации QR-кода
app.post('/generate', (req, res) => {
    const text = req.body.text;
    const darkColor = req.body.darkColor;
    const lightColor = req.body.lightColor;

    if (!text) {
        console.log('Нет текста для генерации QR-кода');
        return res.render('index', {qrcode: null});
    }

    qrcode.toDataURL(text, {color: {dark: darkColor, light: lightColor}}, (err, url) => {
        if (err) {
            console.error(err);
            res.render('index', {qrcode: null});
        } else {
            res.render('index', {qrcode: url});
        }
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
    
    