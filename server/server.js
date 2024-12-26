const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware для парсинга JSON
app.use(bodyParser.json());

// Обработчик POST-запроса для получения геолокации
app.post('/api/location', (req, res) => {
  const { latitude, longitude } = req.body;

  if (latitude && longitude) {
    console.log(`Получена геолокация: Широта - ${latitude}, Долгота - ${longitude}`);
    res.json({ message: 'Геолокация получена успешно!' });
  } else {
    res.status(400).json({ message: 'Ошибка: не удалось получить геолокацию.' });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
