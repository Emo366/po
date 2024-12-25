// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// app.post('/location', (req, res) => {
//   const { latitude, longitude } = req.body;
//   console.log(`Местоположение: широта ${latitude}, долгота ${longitude}`);
//   res.send('Местоположение получено.');
// });

// app.listen(3000, () => {
//   console.log('Сервер запущен на порту 3000');
// });

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const { latitude, longitude } = JSON.parse(event.body);
    console.log(`Местоположение: широта ${latitude}, долгота ${longitude}`);

    // Возвращаем успешный ответ
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Местоположение получено.' }),
    };
  } else {
    // Возвращаем ошибку, если метод не поддерживается
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Метод не поддерживается.' }),
    };
  }
};